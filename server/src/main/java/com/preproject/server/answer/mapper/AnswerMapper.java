package com.preproject.server.answer.mapper;

import com.preproject.server.answer.dto.AnswerPatchDto;
import com.preproject.server.answer.dto.AnswerPostDto;
import com.preproject.server.answer.dto.AnswerResponseDto;
import com.preproject.server.answer.entity.Answer;
import com.preproject.server.answer.service.AnswerService;
import org.mapstruct.Mapper;

import java.lang.reflect.Member;
import java.util.List;

@Mapper(componentModel = "Spring")
public interface AnswerMapper {
    // AnswerPostDto -> Answer
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);


    // AnswerPatchDto -> Answer
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);


    // Answer -> AnswerResponseDto
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);

    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
}
