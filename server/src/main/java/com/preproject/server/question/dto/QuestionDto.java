package com.preproject.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class QuestionDto {
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Post {
        @NotNull
        private long member_id;

        @NotNull
        private String title;

        @NotNull
        private String content;
    }
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Patch {
        @NotNull
        private long member_id;

        private String title;

        private String content;

        private long questionId;
    }
}
