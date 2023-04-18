package com.preproject.server.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class MemberDto {
    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    public static class Post{
        @Valid
        @NotNull(message = "닉네임을 입력하세요.")
        private String nickname;

        @Valid
        @NotNull(message = "이름을 입력하세요.")
        private String name;

        @Valid
        @NotNull(message = "이메일을 입력하세요.")
        private String email;

        @Valid
        @NotNull(message = "패스워드를 입력하세요.")
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        @Positive
        private long memberId;
        private String nickname;
        private String name;
        private String email;
    }
}