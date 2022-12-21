package com.stackoverflow.stackoverflow.Answer.service;

import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import com.stackoverflow.stackoverflow.Answer.repository.AnswerRepository;
import com.stackoverflow.stackoverflow.Member.entity.Member;
import com.stackoverflow.stackoverflow.Member.service.MemberService;
import com.stackoverflow.stackoverflow.exception.BusinessLogicException;
import com.stackoverflow.stackoverflow.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/*Todo Service 진행상황
*  1. create/update/read/delete 틀 생성 및 구현 진행
*  - update의 수정 일정 변경 관련 수정 필요
*  - ExceptionCode에 'ANSWER_NOT_FOUND' 추가 필요
*  - QuestionService import 필요*/

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
        //질문에 대한 답변 >> 질문이 존재하는지 확인한 후 answer을 등록
        Member findMember = memberService.findMember(memberId);
        Qeustion findQuestion = questionService.findQuestion(questionId);

        answer.createAnswer(findMember, findQeustion); //Entity 주석 풀면 해결
        return answerRepository.save(answer);
    }

    //patch에 연동
    @Transactional
    public Answer updateAnswer(Answer answer){
        //작성한 답변이 존재하는지 확인
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getAnswerBody()).ifPresent(answerBody -> findAnswer.setAnswerBody(answerBody));

        //수정한 내용 저장
        return answerRepository.save(findAnswer);
    }

    //gets에 연동
    public Page<Answer> readAnswers(int page, int size) {
        return answerRepository.findAll(PageRequest.of(page-1, size,
                Sort.by("questionId").descending()));
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
