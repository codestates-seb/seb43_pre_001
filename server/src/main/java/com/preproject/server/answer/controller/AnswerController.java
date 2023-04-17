package com.preproject.server.answer.controller;

import com.preproject.server.answer.dto.AnswerPatchDto;
import com.preproject.server.answer.dto.AnswerPostDto;
import com.preproject.server.answer.entity.Answer;
import com.preproject.server.answer.mapper.AnswerMapper;
import com.preproject.server.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.lang.reflect.Member;

@RestController
@Validated
@RequestMapping("/answers")
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper mapper;
//    private QuestionService questionService;

    public AnswerController(AnswerService answerService, AnswerMapper mapper){
        this.answerService = answerService;
        this.mapper = mapper;
    }

    // 답변 작성
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto, Member member){
        Answer question = answerService.createAnswer(
                mapper.answerPostDtoToAnswer(answerPostDto, member));

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(question), HttpStatus.CREATED);
    }

    /**
     답변 수정
     자기가 작성한 답만 수정,삭제 가능
     자기 답 아닌데 접근 ->  예외 발생
     **/
    @PatchMapping("/{answer_id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive @NotNull long answerId,
                                      @Valid @RequestBody AnswerPatchDto requestBody){
        requestBody.setAnswer_id(answerId);
        Answer answer = mapper.answerPatchDtoToAnswer(answerService, requestBody);
        Answer updatedAnswer = answerService.updateAnswer(answer);


        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(answer), HttpStatus.OK);
    }

}
