package com.preproject.server.answer.dto;

import com.preproject.server.answer.entity.Answer;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
public class AnswerResponseDto {
    private String member_id;
    private Long question_id;
    private Long answer_id;
    private String content;
    private LocalDateTime created_at;

}
