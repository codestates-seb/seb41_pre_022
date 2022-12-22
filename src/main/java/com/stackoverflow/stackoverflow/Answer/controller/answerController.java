package com.stackoverflow.stackoverflow.Answer.controller;

import com.stackoverflow.stackoverflow.Answer.dto.AnswerPatchDto;
import com.stackoverflow.stackoverflow.Answer.dto.AnswerPostDto;
import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import com.stackoverflow.stackoverflow.Answer.mapper.AnswerMapper;
import com.stackoverflow.stackoverflow.Answer.service.AnswerService;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

/*Todo Controller 진행상황
*  1. post/patch/get/delete/deletes 틀 생성 및 구현 진행 (에러 확인 필요 >> post를 위해서는 질문이 존재해야 함)
* */

@RestController
@RequestMapping("v1/answer")
@Validated
@Slf4j
public class answerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    //의존성 주입 진행
    public answerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    //답변 생성
    @PostMapping
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto/*,
                                     @RequestParam("memberId") @Positive long memberId,
                                     @RequestParam("questionId") @Positive long questionId*/){

        //mapper를 통해 Dto를 Entity로 변환한 후 Service에 요청을 보내 답변을 생성하는 요청을 보내 response에 저장
        //Answer response = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto), memberId, questionId);
        Answer response = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));


        //mapper를 이용해 위의 처리한 요청을 다시 Entity에서 Dto로 변환하여 리턴처리
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.CREATED);
    }

    //답변 수정
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @RequestBody AnswerPatchDto answerPatchDto){
        answerPatchDto.setAnswerId(answerId);
        //mapper를 통해 Dto를 Entity로 변환한 후 Service에 요청을 보대 답변을 수정하여 response에 저장
        Answer response = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        //mapper를 이용해 위의 처리한 요청을 다시 Entity에서 Dto로 변환하여 리턴처리
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }

    //답변 조회(질문에 달린 모든 답변 조회)
    /*@GetMapping("/fromquestion/{question-id}")
    public ResponseEntity getAnswers(@PathVariable("question-id") @Positive long questionId,
                                     @RequestParam("page") @Positive int page,
                                     @RequestParam("size") @Positive int size){
        List<Answer> response = answerService.findAnswers(questionId, page, size).getContent();
        return new ResponseEntity<>(mapper.answersToAnswerResponseDtos(response), HttpStatus.OK);
    }*/

    //답변 삭제(1개)
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId){
        //Service에 요청을 보내 해당하는 answerId 하는 답변을 조회해 삭제
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
