package com.preproject.server.answer.dto;

import com.preproject.server.answer.entity.Answer;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
public class AnswerResponseDto {
    private String memberId;
    private Long questionId;
    private Long answerId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

}
