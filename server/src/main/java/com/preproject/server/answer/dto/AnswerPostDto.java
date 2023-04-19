package com.preproject.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
@AllArgsConstructor
public class AnswerPostDto { // Request Body
    @NotNull
    @Positive
    private Long question_id;
    @NotNull
    private Long member_id;
    @NotBlank(message = "답변 내용을 적어주세요")
    private String content;
}
