package com.preproject.server.answer.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class AnswerPatchDto {

    private Long memberId;
    @Setter
    private Long answerId;
    private String content; // 내용 수정

    public AnswerPatchDto(Long member_id, Long answer_id, String content) {
        this.memberId = member_id;
        this.answerId = answer_id;
        this.content = content;
    }
}
