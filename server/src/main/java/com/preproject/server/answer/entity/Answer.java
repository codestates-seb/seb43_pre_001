package com.preproject.server.answer.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;
    private Long Member;

    @Column(length = 1000, nullable = false)
    private String content;

    public enum AnswerStatus{
        ANSWER_NOT_EXIST("존재하지 않는 답변"),
        ANSWER_EXIST("존재하는 답변");

        @Getter
        private String status;

        AnswerStatus(String status){
            this.status = status;
        }
    }
}
