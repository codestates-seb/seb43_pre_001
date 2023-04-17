package com.preproject.server.answer.dto;

import com.preproject.server.answer.entity.Answer;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerResponseDto {
    private Long answerId;
    private String member;
    private String content;
    private Answer.AnswerStatus answerStatus;
    private Data createdAt;
    private Data updatedAt;

}
