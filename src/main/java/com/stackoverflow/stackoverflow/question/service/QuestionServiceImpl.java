package com.stackoverflow.stackoverflow.question.service;

import com.stackoverflow.stackoverflow.question.entity.Question;
import com.stackoverflow.stackoverflow.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionServiceImpl implements QuestionService{
    QuestionRepository questionRepository;

    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public Question saveQuestion(Question questioin) {
        return null;
    }

    @Override
    public Question updateQuestion(long id, Question questiion) {
        return null;
    }

    @Override
    public Question findQuestion(long id) {
        return null;
    }

    @Override
    public Question findQuestions(int page, int size) {
        return null;
    }

    @Override
    public void deleteQuestiion(long id) {

    }

    public Question findVerifiedMember(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
