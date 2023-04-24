package com.preproject.server.answer.service;

import com.preproject.server.answer.entity.Answer;
import com.preproject.server.answer.repository.AnswerRepository;
import com.preproject.server.exception.BusinessLogicException;
import com.preproject.server.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    /*
    <답변 등록>
     */
    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public Answer findVerifiedAnswer(long answerId){ // 요청된 답이 DB에 없으면 에러
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    public List<Answer> findVerifiedAnswers(long questionId){ // 요청된 답이 DB에 없으면 에러
        List<Answer> optionalAnswers = answerRepository.findAllByQuestionId(questionId);
//        for(Optional<Answer> answer : optionalAnswers) {
//            findAnswers.add(answer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND)));
//        }
        return optionalAnswers;
    }

    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId()); // 요청된 답이 DB에 없으면 에러
        if(answer.getMember().getMemberId() != findAnswer.getMember().getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.ANSWER_AUTHOR_NOT_MATCH);
        }else {
            Optional.ofNullable(answer.getContent()) //내용수정
                    .ifPresent(answerContent -> findAnswer.setContent(answerContent));
            Optional.ofNullable(answer.getQuestion())
                    .ifPresent(answerQuestion -> findAnswer.setQuestion(answerQuestion));
            Optional.ofNullable(answer.getCreatedAt())
                    .ifPresent(answerCreatedAt ->findAnswer.setCreatedAt(answerCreatedAt)); // 업데이트 날짜 수정


            return answerRepository.save(findAnswer);
        }
    }

    public void deleteAnswer(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }
}