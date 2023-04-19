package com.preproject.server.question.mapper;

import com.preproject.server.member.entity.Member;
import com.preproject.server.question.dto.QuestionDto;
import com.preproject.server.question.entity.Question;
import com.preproject.server.question.dto.QuestionResponseDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {

    default Question questionDtoPostToQuestion(QuestionDto.Post requestBody, Member member){
        Question question = new Question(requestBody.getTitle(),requestBody.getContent(),member);
        return question;
    }
    default Question questionDtoPatchToQuestion(QuestionDto.Patch requestBody, Member member){
        Question question = new Question(requestBody.getTitle(),requestBody.getContent(),member);
        question.setQuestionId(requestBody.getQuestionId());
        return question;
    }
    QuestionResponseDto questionToQuestionResponseDto(Question question);
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> question);

}
