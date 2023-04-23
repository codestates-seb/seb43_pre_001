package com.preproject.server.member.controller;

import com.preproject.server.auth.jwt.JwtTokenizer;
import com.preproject.server.member.dto.MemberDto;
import com.preproject.server.member.mapper.MemberMapper;
import com.preproject.server.member.repository.MemberRepository;
import com.preproject.server.member.service.MemberService;
import com.preproject.server.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@Validated
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;
    private final JwtTokenizer jwtTokenizer;
    private final MemberRepository memberRepository;

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post memberPostDto) throws Exception {
        Member member = mapper.memberPostDtoToMember(memberPostDto);
        Member createdMember = memberService.createMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(createdMember),HttpStatus.CREATED);
    }

    // 회원 정보 수정
    @PatchMapping("/update/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") long memberId,
                                      @Valid @RequestBody MemberDto.Patch memberPatchDto) {
        memberPatchDto.setMemberId(memberId);
        Member member = mapper.memberPatchDtoToMember(memberPatchDto);
        Member updatedMember = memberService.updateMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(updatedMember), HttpStatus.OK);
    }

}
