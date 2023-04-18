package com.preproject.server.answer.mapper;

import com.preproject.server.member.entity.Member;
import com.preproject.server.answer.dto.AnswerPatchDto;
import com.preproject.server.answer.dto.AnswerPostDto;
import com.preproject.server.answer.dto.AnswerResponseDto;
import com.preproject.server.answer.entity.Answer;
import com.preproject.server.member.mapper.MemberMapper;
import com.preproject.server.member.service.MemberService;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "Spring")
public interface AnswerMapper {
    // AnswerPostDto -> Answer
//    default Answer answerPostDtoToAnswer(AnswerPostDto requestBody, Member member){
//        Answer answer = new Answer(requestBody.getMember_id(), requestBody.getContent(), member);
//        return answer;
//    }

    Answer answerPostDtoToAnswer(MemberService memberService, AnswerPostDto answerPostDto);


    // AnswerPatchDto -> Answer
    default Answer answerPatchDtoToAnswer(AnswerPatchDto requestBody, Member member){
        Answer answer = new Answer(requestBody.getMember_id(), requestBody.getContent(), member);
        answer.setAnswerId(requestBody.getAnswer_id());
        return answer;
    }

//    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    // Answer -> AnswerResponseDto
    default AnswerResponseDto answerToAnswerResponseDto(MemberMapper memberMapper, Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setQuestion_id(answer.getQuestionId());
        answerResponseDto.setAnswer_id(answer.getAnswerId());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setCreated_at(answer.getCreatedAt());

//        Member member = answer.getMember();
//        answerResponseDto.setMember_id(memberMapper.memberToMemberResponseDto(member));

        return answerResponseDto;
    }

    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
}