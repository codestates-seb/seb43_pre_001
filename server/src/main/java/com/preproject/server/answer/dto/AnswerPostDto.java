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
    private Long questionId;
    @NotNull
    private Long memberId;
    @NotBlank(message = "답변 내용을 적어주세요")
    private String content;

    public AnswerPostDto(Long questionId, Long memberId, String content) {
        this.questionId = questionId;
        this.memberId = memberId;
        this.content = content;
    }
}
