package com.stackoverflow.stackoverflow.feature.Question.repository;

import com.stackoverflow.stackoverflow.feature.Question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
