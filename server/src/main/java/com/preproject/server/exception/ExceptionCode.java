package com.preproject.server.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    EMAIL_EXISTS(409, "Email exists"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    QUESTION_AUTHOR_NOT_MATCH(404, "The author of the question does not match");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
