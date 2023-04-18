package com.preproject.server.member.service;

import com.preproject.server.member.entity.Member;
import com.preproject.server.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /*
    <회원 등록>
    1. 중복 이메일 검증
    2. 등록
     */
    public Member createMember(Member member) throws Exception {
        // 중복 이메일 검증
        verifyExistsEmail(member.getEmail());
        return memberRepository.save(member);
    }

    private void verifyExistsEmail(String email) throws Exception {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if (optionalMember.isPresent()) {
            throw new Exception("중복된 이메일");
        }
    }
}
