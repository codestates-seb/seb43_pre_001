package com.preproject.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerPostDto {
    private Long questionId;
    @NotNull
    private Long memberId;
    @NotEmpty
    private String content;
}
