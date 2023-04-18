package com.preproject.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
public class AnswerPostDto { // Request Body
    @NotNull
    private Long question_id;
    @NotNull
    private Long member_id;
    @NotEmpty
    private String content;
}
