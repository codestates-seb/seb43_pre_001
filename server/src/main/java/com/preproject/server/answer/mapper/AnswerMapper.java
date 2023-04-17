package com.preproject.server.answer.mapper;

import com.preproject.server.answer.dto.AnswerPostDto;
import com.preproject.server.answer.dto.AnswerResponseDto;
import com.preproject.server.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "Spring")
public class AnswerMapper {
    // AnswerDto.Post -> Answer
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto){
        Answer answer = new Answer();
        answer.setContent(answerPostDto.getContent());
        return answer;
    };

    // Answer -> AnswerResponseDto
    default AnswerResponseDto answerToAnswerResponseDto(Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setContent(answer.getContent());

        return answerResponseDto;
    };
}
