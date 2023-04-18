package com.preproject.server.answer.controller;

import com.preproject.server.dto.SingleResponseDto;
import com.preproject.server.member.entity.Member;
import com.preproject.server.answer.dto.AnswerPatchDto;
import com.preproject.server.answer.dto.AnswerPostDto;
import com.preproject.server.answer.entity.Answer;
import com.preproject.server.answer.mapper.AnswerMapper;
import com.preproject.server.answer.service.AnswerService;
import com.preproject.server.member.mapper.MemberMapper;
import com.preproject.server.member.repository.MemberRepository;
import com.preproject.server.member.service.MemberService;
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
    private MemberService memberService;
    private MemberMapper memberMapper;
    private AnswerMapper mapper;


    // 답변 작성
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){
        Member member = memberRepository.findById(answerPostDto.getMember_id()).orElseThrow(() -> new RuntimeException());
        Answer question = answerService.createAnswer(
                mapper.answerPostDtoToAnswer(answerPostDto, member));

//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(question)), HttpStatus.OK);
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(memberMapper, question), HttpStatus.CREATED);
    }

    // 답변 조회
    @GetMapping("/{question_id}")
    public ResponseEntity getAnswer(@PathVariable("question_id") @Positive long answerId) {
        Answer answer = answerService.findVerifiedAnswer(answerId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(memberMapper, answer)), HttpStatus.OK);
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
        Member member = memberRepository.findById(requestBody.getMember_id()).orElseThrow(() -> new RuntimeException());
        Answer answer = mapper.answerPatchDtoToAnswer(requestBody , member);
        Answer updatedAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(memberMapper, updatedAnswer)), HttpStatus.OK);
    }

    // 답변 삭제
    @DeleteMapping("/{answer_id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer_id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
