package com.preproject.server.answer.mapper;

import com.preproject.server.answer.dto.AnswerPatchDto;
import com.preproject.server.answer.dto.AnswerPostDto;
import com.preproject.server.answer.dto.AnswerResponseDto;
import com.preproject.server.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "Spring")
public interface AnswerMapper {
    // AnswerPostDto -> Answer
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto){
        Answer answer = new Answer();
        answer.setContent(answerPostDto.getContent());
        return answer;
    }

    default Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto){
        Answer answer = new Answer();
        answer.setAnswerId(answerPatchDto.getAnswerId());
        answer.setContent(answerPatchDto.getContent());
        return answer;
    }

    // Answer -> AnswerResponseDto
    default AnswerResponseDto answerToAnswerResponseDto(Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setContent(answer.getContent());

        return answerResponseDto;
    }

    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
}
