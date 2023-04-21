package com.preproject.server.answer.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class AnswerPatchDto {

    private Long member_id;
    @Setter
    private Long answer_id;
    private String content; // 내용 수정

    public AnswerPatchDto(Long member_id, Long answer_id, String content) {
        this.member_id = member_id;
        this.answer_id = answer_id;
        this.content = content;
    }
}
