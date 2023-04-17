package com.preproject.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
public class AnswerPatchDto {
    @NotNull
    private Long member_id;
    private Long answer_id;
    private String content;
}
