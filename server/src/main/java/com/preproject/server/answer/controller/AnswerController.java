package com.preproject.server.answer.controller;

import com.preproject.server.answer.repository.AnswerRepository;
import com.preproject.server.response.SingleResponseDto;
import com.preproject.server.exception.BusinessLogicException;
import com.preproject.server.exception.ExceptionCode;
import com.preproject.server.member.entity.Member;
import com.preproject.server.answer.dto.AnswerPatchDto;
import com.preproject.server.answer.dto.AnswerPostDto;
import com.preproject.server.answer.entity.Answer;
import com.preproject.server.answer.mapper.AnswerMapper;
import com.preproject.server.answer.service.AnswerService;
import com.preproject.server.member.mapper.MemberMapper;
import com.preproject.server.member.repository.MemberRepository;
import com.preproject.server.question.entity.Question;
import com.preproject.server.question.repository.QuestionRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;


@RestController
@Validated
@RequestMapping("/answers")
@AllArgsConstructor
public class AnswerController {
    private AnswerService answerService;
    private MemberRepository memberRepository;
    private MemberMapper memberMapper;
    private AnswerMapper mapper;
    private QuestionRepository questionRepository;
    private AnswerRepository answerRepository;


    // 답변 작성
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){
        Member member = memberRepository.findById(answerPostDto.getMember_id()).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        Question findQuestion = questionRepository.findById(answerPostDto.getQuestion_id()).orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        Answer question = answerService.createAnswer(
                mapper.answerPostDtoToAnswer(answerPostDto, member, findQuestion));

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(question), HttpStatus.CREATED);
    }

    // 답변 조회
    @GetMapping("/{question_id}")
    public ResponseEntity getAnswer(@PathVariable("question_id") @Positive long answerId) {
        Answer answer = answerService.findVerifiedAnswer(answerId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);
    }

    /**
     답변 수정
     자기가 작성한 답만 수정,삭제 가능
     자기 답 아닌데 접근 ->  예외 발생
     **/
    @PatchMapping("/{answer_id}")
    public ResponseEntity patchAnswer(@PathVariable("answer_id") @Positive @NotNull long answerId,
                                      @Valid @RequestBody AnswerPatchDto requestBody){
        requestBody.setAnswer_id(answerId);
        Member member = memberRepository.findById(requestBody.getMember_id()).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        Answer findAnswer = answerRepository.findById(requestBody.getAnswer_id()).orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        Answer answer = mapper.answerPatchDtoToAnswer(requestBody , member, findAnswer.getQuestion());
        Answer updatedAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(updatedAnswer)), HttpStatus.OK);
    }

    // 답변 삭제
    @DeleteMapping("/{answer_id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer_id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
