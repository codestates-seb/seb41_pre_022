package com.stackoverflow.stackoverflow.Answer.service;

import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import com.stackoverflow.stackoverflow.Answer.repository.AnswerRepository;
import com.stackoverflow.stackoverflow.Member.entity.Member;
import com.stackoverflow.stackoverflow.Member.service.MemberService;
import com.stackoverflow.stackoverflow.Question.entity.Question;
import com.stackoverflow.stackoverflow.Question.service.QuestionService;
import com.stackoverflow.stackoverflow.exception.BusinessLogicException;
import com.stackoverflow.stackoverflow.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;


@Service
@Transactional
public class AnswerService { //Controller의 요청 처리 클래스
    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    //의존성 주입
    public AnswerService(AnswerRepository answerRepository, MemberService memberService, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
    }

    //post에 연동
    @Transactional
    public Answer createAnswer(Answer answer, long memberId, long questionId){
        //질문에 대한 답변 >> 질문한 member와 question을 찾아 answer에 저장
        Member findMember = memberService.findMember(memberId);
        Question findQuestion = questionService.findQuestion(questionId); //Question의 Service에서 READ 부분의 구현이 어떻게 되었는지 확인 후 수정 필요
        answer.createAnswer(findMember, findQuestion); //Entity 주석 풀면 해결

        return answerRepository.save(answer);
    }

    //patch에 연동
    @Transactional
    public Answer updateAnswer(Answer answer){
        //작성한 답변이 존재하는지 확인
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getAnswerBody()).
                ifPresent(answerBody -> findAnswer.setAnswerBody(answerBody));

        //수정한 내용 저장
        return answerRepository.save(findAnswer);
    }

    //gets에 연동
    public Page<Answer> findAnswers(long questionId, int page, int size) {
        questionService.findVerifiedMember(questionId);
        return answerRepository.findAllByAnswerId(questionId, PageRequest.of(page-1, size,
                Sort.by("answerId").descending()));
    }

    //delete에 연동
    @Transactional
    public void deleteAnswer(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    private Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);

        Answer findAnswer = optionalAnswer.orElseThrow(() ->
               new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }
}
