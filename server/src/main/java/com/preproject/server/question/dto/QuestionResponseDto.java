package com.preproject.server.question.dto;

import com.preproject.server.member.dto.MemberDto;
import com.preproject.server.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionResponseDto {
    private MemberDto.Response member;
    private long questionId;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

}
