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
    default Answer answerPostDtoToAnswer(AnswerPostDto requestBody, Member member){
        Answer answer = new Answer(requestBody.getMember_id(), requestBody.getContent(), member);
        return answer;
    }

    default Answer answerPatchDtoToAnswer(AnswerPatchDto requestBody, Member member){
        Answer answer = new Answer(requestBody.getMember_id(), requestBody.getContent(), member);
        answer.setAnswerId(requestBody.getAnswer_id());
        return answer;
    }

    // Answer -> AnswerResponseDto
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);

    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
}
