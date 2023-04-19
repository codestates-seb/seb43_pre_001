package com.preproject.server.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
@Getter
@Setter
public class AnswerResponseDto {
    @Positive
    private Long member_id;
    private Long question_id;
    private Long answer_id;
    private String content;
    private LocalDateTime created_at;

}
