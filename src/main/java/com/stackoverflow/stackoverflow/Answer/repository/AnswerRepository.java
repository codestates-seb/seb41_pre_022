package com.stackoverflow.stackoverflow.Answer.repository;

import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> { //JpaRepository를 상속해 DB 테이블에 CRUD 기능 사용
    //Page<Answer> findAllByQuestionId(Long questionId, Pageable pageable);

}
