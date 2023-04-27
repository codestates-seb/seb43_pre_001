package com.preproject.server.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class QuestionDto {
    @NoArgsConstructor
    @Getter
    @Setter
    public static class Post {
        @NotNull
        private long memberId;

        @NotNull
        private String title;

        @NotNull
        private String content;

        public Post(long member_id, String title, String content) {
            this.memberId = member_id;
            this.title = title;
            this.content = content;
        }
    }
    @NoArgsConstructor
    @Getter
    @Setter
    public static class Patch {
        @NotNull
        private long memberId;

        private String title;

        private String content;

        private long questionId;

        public Patch(long member_id, String title, String content, long questionId) {
            this.memberId = member_id;
            this.title = title;
            this.content = content;
            this.questionId = questionId;
        }
    }
}
