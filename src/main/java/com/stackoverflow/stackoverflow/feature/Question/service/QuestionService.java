package com.stackoverflow.stackoverflow.feature.Question.service;

import com.stackoverflow.stackoverflow.feature.Question.entity.Question;
import com.stackoverflow.stackoverflow.feature.Question.repository.QuestionRepository;
import com.stackoverflow.stackoverflow.global.exception.BusinessLogicException;
import com.stackoverflow.stackoverflow.global.exception.ExceptionCode;
import com.stackoverflow.stackoverflow.global.utils.CustomBeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {
    QuestionRepository questionRepository;
    CustomBeanUtils<Question> customBeanUtils;

    public QuestionService(QuestionRepository questionRepository, CustomBeanUtils<Question> customBeanUtils) {
        this.questionRepository = questionRepository;
        this.customBeanUtils = customBeanUtils;
    }

    public Question saveQuestion(Question questioin) {
        questioin.setQuestionId(questionRepository.findAll().size() + 1L);
        questionRepository.save(questioin);
        return questioin;
    }


    public Question updateQuestion(long questionId, Question question) {
        Question findQuestion = questionRepository.findById(questionId).orElseThrow();
        Optional.ofNullable(question.getQuestionTitle())
                .ifPresent(title -> findQuestion.setQuestionTitle(title));
        Optional.ofNullable(question.getQuestionBody())
                .ifPresent(body -> findQuestion.setQuestionBody(body));

        return questionRepository.save(findQuestion);
    }


    public Question findQuestion(long questionId) {
        return findVerifiedMember(questionId);
    }


    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size,
                Sort.by("questionId").descending()));
    }


    public void deleteQuestiion(long questionId) {
         questionRepository.deleteById(questionId);
    }

    public Question findVerifiedMember(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
