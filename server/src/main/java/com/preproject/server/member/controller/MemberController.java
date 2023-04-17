package com.preproject.server.member.controller;

import com.preproject.server.member.dto.MemberDto;
import com.preproject.server.member.mapper.MemberMapper;
import com.preproject.server.member.service.MemberService;
import com.preproject.server.member.entity.Member;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@Validated
@RequestMapping("/members")
public class MemberController {
    private MemberService memberService;
    private MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post memberPostDto) throws Exception {
        Member member = mapper.memberPostDtoToMember(memberPostDto);
        Member createdMember = memberService.createMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(createdMember),HttpStatus.CREATED);
    }

}
