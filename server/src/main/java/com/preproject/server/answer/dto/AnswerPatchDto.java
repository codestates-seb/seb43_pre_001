package com.preproject.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
public class AnswerPatchDto {

    private Long member_id;
    @Setter
    private Long answer_id;
    private String content; // 내용 수정
}
