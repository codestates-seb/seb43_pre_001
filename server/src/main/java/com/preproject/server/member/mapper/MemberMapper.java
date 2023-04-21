package com.preproject.server.member.mapper;

import com.preproject.server.auth.dto.LoginDto;
import com.preproject.server.member.dto.MemberDto;
import com.preproject.server.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    // MemberDto.Post -> Member
    Member memberPostDtoToMember(MemberDto.Post memberPostDto);

    // Member -> MemberDto.Response
    MemberDto.Response memberToMemberResponseDto(Member member);

}
