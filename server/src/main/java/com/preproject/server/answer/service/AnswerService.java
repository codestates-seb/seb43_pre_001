package com.preproject.server.answer.service;

import com.preproject.server.answer.entity.Answer;
import com.preproject.server.answer.repository.AnswerRepository;
import org.springframework.stereotype.Service;

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

    public Answer updateAnswer(Answer answer){
        Answer findAnswer = answerRepository.findById(answer.getAnswerId()).orElseThrow(() -> new RuntimeException());
        Optional.ofNullable(answer.getContent()) //내용수정
                .ifPresent(answerBody->findAnswer.setContent(answerBody));
        Optional.ofNullable(answer.getModifiedAt()) // 업데이트 날짜 수정
                .ifPresent(answerUpdatedAt->findAnswer.setModifiedAt(answerUpdatedAt));

        Answer updatedQuestion = answerRepository.save(findAnswer);

        return updatedQuestion;
    }

    public Answer findVerifiedAnswer(long answerId){ // 요청된 답이 DB에 없으면 에러
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow();
        return findAnswer;
        }

}
