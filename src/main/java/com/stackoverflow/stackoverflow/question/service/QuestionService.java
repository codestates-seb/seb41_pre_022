package com.stackoverflow.stackoverflow.question.service;

import com.stackoverflow.stackoverflow.question.entity.Question;
import org.springframework.stereotype.Service;

public interface QuestionService {
    Question findQuestion(long id);
    Question findQuestions(int page, int size);
    Question saveQuestion(Question questioin);
    Question updateQuestion(long id, Question questiion);
    void deleteQuestiion(long id);
}
