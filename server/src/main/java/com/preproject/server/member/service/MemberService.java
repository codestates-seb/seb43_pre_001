package com.preproject.server.member.service;

import com.preproject.server.auth.dto.LoginDto;
import com.preproject.server.auth.jwt.JwtTokenizer;
import com.preproject.server.auth.utils.MemberAuthorityUtils;
import com.preproject.server.exception.BusinessLogicException;
import com.preproject.server.exception.ExceptionCode;
import com.preproject.server.member.entity.Member;
import com.preproject.server.member.repository.MemberRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import org.apache.tomcat.util.buf.UDecoder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final MemberAuthorityUtils authorityUtils;
    private final JwtTokenizer jwtTokenizer;

    public MemberService(MemberRepository memberRepository,
                         PasswordEncoder passwordEncoder,
                         MemberAuthorityUtils authorityUtils,
                         JwtTokenizer jwtTokenizer) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
        this.jwtTokenizer = jwtTokenizer;
    }

    /*
    <회원 등록>
    1. 중복 이메일 검증
    2. 패스워드 암호화
    3. Role -> db에 저장
    4. 등록
     */
    public Member createMember(Member member) throws Exception {
        // 중복 이메일 검증
        verifyExistsEmail(member.getEmail());

        // 중복 닉네임 검증
        verifyExistsNickname(member.getNickname());

        // 패스워드 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        // Role -> db에 저장
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        // 등록
        return memberRepository.save(member);
    }

    /*
      <회원 정보 수정>
      회원 정보는 닉네임, 비밀번호만 변경 가능
      1. 회원 검증(존재O or 존재X)
      2. 수정
     */
    public Member updateMember(Member member) {
        // 회원 검증
        Member findMember = checkMember(member.getMemberId());
        // 닉네임 수정
        findMember.setNickname(member.getNickname());
        // 비밀번호 수정 -> 암호화하여 저장
        String updatedPassword = passwordEncoder.encode(findMember.getPassword());
        findMember.setPassword(updatedPassword);

        // 저장
        return memberRepository.save(findMember);

    }

    /*
    <회원 정보 삭제>
    1. 회원 검증(존재O or 존재X)
    2. 삭제
     */
    public void removeMember(long memberId) {
        // 회원 검증(존재O or 존재X)
        Member findMember = checkMember(memberId);

        memberRepository.delete(findMember);
    }


    private void verifyExistsEmail(String email) throws Exception {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if (optionalMember.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.EMAIL_EXISTS);
        }
    }

    private void checkEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if (!optionalMember.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
    }

    // 회원 검증 메서드
    private Member checkMember(long memberId) {
        return memberRepository.findById(memberId).orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    // 중복 닉네임 검증 메서드
    private void verifyExistsNickname(String nickname) {
        Optional<Member> optionalMember = memberRepository.findByNickname(nickname);
        if (optionalMember.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.NICKNAME_EXISTS);
        }
    }

}
