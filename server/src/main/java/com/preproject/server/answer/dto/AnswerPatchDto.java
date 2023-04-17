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
    private Long memberId;
    private Long answerId;
    private String content;
}
