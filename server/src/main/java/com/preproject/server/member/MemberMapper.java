package com.preproject.server.member;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    // MemberDto.Post -> Member
    Member memberPostDtoToMember(MemberDto.Post memberPostDto);
}
