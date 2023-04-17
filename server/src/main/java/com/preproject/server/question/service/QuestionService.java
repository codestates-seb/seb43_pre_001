package com.preproject.server.question.service;

import com.preproject.server.question.entity.Question;
import com.preproject.server.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class QuestionService {
    private QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question){
        return questionRepository.save(question);
    }
    public Question findQuestion(long questionId){
        return questionRepository.findById(questionId).orElseThrow(() -> new RuntimeException());
    }
    public Question updateQuestion(Question question) {
        Question findQuestion = questionRepository.findById(question.getQuestionId()).orElseThrow(() -> new RuntimeException());

        if(question.getMember().getMemberId()!=findQuestion.getMember().getMemberId()) new RuntimeException();
        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));
        findQuestion.setModifiedAt(LocalDateTime.now());

        return questionRepository.save(findQuestion);
    }
    public void deleteQuestion(long questionId) {
        Question findQuestion = questionRepository.findById(questionId).orElseThrow(() -> new RuntimeException());
        questionRepository.delete(findQuestion);
    }
    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size,Sort.by("questionId").descending()));
    }
}
