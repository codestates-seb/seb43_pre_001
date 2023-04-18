package com.preproject.server.answer.mapper;

import com.preproject.server.member.entity.Member;
import com.preproject.server.answer.dto.AnswerPatchDto;
import com.preproject.server.answer.dto.AnswerPostDto;
import com.preproject.server.answer.dto.AnswerResponseDto;
import com.preproject.server.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "Spring")
public interface AnswerMapper {
    // AnswerPostDto -> Answer
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto, Member member){
        Answer answer = new Answer();
        answer.setMember(member);
        answer.setContent(answerPostDto.getContent());
        answer.setQuestionId(answerPostDto.getQuestion_id());

        return answer;
    }


    // AnswerPatchDto -> Answer
    default Answer answerPatchDtoToAnswer(AnswerPatchDto requestBody, Member member){
        Answer answer = new Answer(requestBody.getMember_id(), requestBody.getContent(), member);
        answer.setAnswerId(requestBody.getAnswer_id());
        return answer;
    }


    // Answer -> AnswerResponseDto
    default AnswerResponseDto answerToAnswerResponseDto(Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setQuestion_id(answer.getQuestionId());
        answerResponseDto.setAnswer_id(answer.getAnswerId());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setCreated_at(answer.getCreatedAt());
        answerResponseDto.setMember_id(answer.getMember().getMemberId());


        return answerResponseDto;
    }

    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
}