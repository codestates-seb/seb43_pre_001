package com.preproject.server.answer.repository;

import com.preproject.server.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    @Query(value = "SELECT * FROM Answer WHERE question_Id = :questionId", nativeQuery = true)
    List<Answer> findAllByQuestionId(@Param("questionId") long questionId);
}
