package com.preproject.server.question.controller;

import com.preproject.server.dto.MultiResponseDto;
import com.preproject.server.dto.SingleResponseDto;
import com.preproject.server.member.Member;
import com.preproject.server.member.MemberRepository;
import com.preproject.server.question.dto.QuestionDto;
import com.preproject.server.question.entity.Question;
import com.preproject.server.question.mapper.QuestionMapper;
import com.preproject.server.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    private QuestionMapper mapper;
    private MemberRepository memberRepository;
    private QuestionService service;

    public QuestionController(QuestionMapper mapper, MemberRepository memberRepository, QuestionService service) {
        this.mapper = mapper;
        this.memberRepository = memberRepository;
        this.service = service;
    }

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post requestBody) {
        Member member = memberRepository.findById(requestBody.getMember_id()).orElseThrow(() -> new RuntimeException());
        Question question = mapper.questionDtoPostToQuestion(requestBody,member);
        Question saveQuestion = service.createQuestion(question);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(saveQuestion)),
                HttpStatus.OK);
    }
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(
            @PathVariable("question-id") @Positive long questionId) {
    Question question = service.findQuestion(questionId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK);
    }
    @PatchMapping("/{question_id}")
    public ResponseEntity patchQuestion(
            @PathVariable("question_id") @Positive long questionId,
            @Valid @RequestBody QuestionDto.Patch requestBody) {
        requestBody.setQuestionId(questionId);
        Member member = memberRepository.findById(requestBody.getMember_id()).orElseThrow(() -> new RuntimeException());
        Question question = mapper.questionDtoPatchToQuestion(requestBody, member);
        Question updateQuestion = service.updateQuestion(question);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(updateQuestion)),
                HttpStatus.OK);
    }
    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(
            @PathVariable("question_id") @Positive long questionId) {
        service.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Question> pageQuestions = service.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions),
                        pageQuestions),
                HttpStatus.OK);
    }
}
