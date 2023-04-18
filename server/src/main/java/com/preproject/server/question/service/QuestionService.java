package com.preproject.server.question.service;

import com.preproject.server.exception.BusinessLogicException;
import com.preproject.server.exception.ExceptionCode;
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
        return questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }
    public Question updateQuestion(Question question) {
        Question findQuestion = findQuestion(question.getQuestionId());

        if(question.getMember().getMemberId()!=findQuestion.getMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_AUTHOR_NOT_MATCH);
        }else {
            Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
            Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));
            findQuestion.setModifiedAt(LocalDateTime.now());

            return questionRepository.save(findQuestion);
        }

    }
    public void deleteQuestion(long questionId) {
        Question findQuestion = findQuestion(questionId);
        questionRepository.delete(findQuestion);
    }
    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size,Sort.by("questionId").descending()));
    }

}
