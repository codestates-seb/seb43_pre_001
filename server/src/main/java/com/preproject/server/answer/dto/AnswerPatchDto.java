package com.preproject.server.answer.dto;

import com.preproject.server.answer.entity.Answer;
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
public class AnswerPatchDto {
    @Setter
    private long answerId;

    // 답 수정
    private String content;

    // 답 삭제
    private Answer.AnswerStatus answerStatus;
}
