package com.stackoverflow.stackoverflow.Answer.repository;

import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import com.stackoverflow.stackoverflow.Question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> { //JpaRepository를 상속해 DB 테이블에 CRUD 기능 사용
//    Page<Answer> findAllByAnswerId(Long questionId, Pageable pageable);
    Page<Answer> findAllByQuestion(Question question, Pageable pageable);
    //엔티티 매핑이 Question 객체로 되어 있기 떄문에 객체를 파라미터로 넘긴다
}
