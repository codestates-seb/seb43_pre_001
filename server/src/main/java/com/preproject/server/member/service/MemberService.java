package com.preproject.server.member.service;

import com.preproject.server.auth.utils.MemberAuthorityUtils;
import com.preproject.server.exception.BusinessLogicException;
import com.preproject.server.exception.ExceptionCode;
import com.preproject.server.member.entity.Member;
import com.preproject.server.member.repository.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final MemberAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository,
                         PasswordEncoder passwordEncoder,
                         MemberAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
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

        // 패스워드 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        // Role -> db에 저장
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        // 등록
        return memberRepository.save(member);
    }

    private void verifyExistsEmail(String email) throws Exception {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if (optionalMember.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.EMAIL_EXISTS);
        }
    }
}
