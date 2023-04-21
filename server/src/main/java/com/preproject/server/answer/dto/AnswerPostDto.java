package com.preproject.server.answer.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
@NoArgsConstructor
public class AnswerPostDto { // Request Body
    @NotNull
    @Positive
    private Long question_id;
    @NotNull
    private Long member_id;
    @NotBlank(message = "답변 내용을 적어주세요")
    private String content;

    public AnswerPostDto(Long question_id, Long member_id, String content) {
        this.question_id = question_id;
        this.member_id = member_id;
        this.content = content;
    }
}
