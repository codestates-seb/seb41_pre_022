package com.stackoverflow.stackoverflow.Question.controller;

import com.stackoverflow.stackoverflow.Question.dto.QuestionDto;
import com.stackoverflow.stackoverflow.Question.entity.Question;
import com.stackoverflow.stackoverflow.Question.mapper.QuestionMapper;
import com.stackoverflow.stackoverflow.Question.service.QuestionService;
import com.stackoverflow.stackoverflow.global.dto.MultiResponseDto;
import com.stackoverflow.stackoverflow.global.dto.SingleResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
@Slf4j
public class QuestionController {
    private QuestionService questionService;
    private QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long id){
        Question response = questionService.findQuestion(id);
        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(response)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size){
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(questions),
                        pageQuestions),
                HttpStatus.OK);
//        return null;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post postQuestionDto){
        Question response = questionService.
                saveQuestion(questionMapper.questionPostDtoToQuestion(postQuestionDto));
        return ResponseEntity.ok(questionMapper.questionToQuestionResponseDto(response));
    }
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long id,
                                        @Valid @RequestBody QuestionDto.Patch patchQuestionDto){
        patchQuestionDto.setQuestionId(id);
        Question response = questionService.
                updateQuestion(id, questionMapper.questionPatchDtoToQuestion(patchQuestionDto));
        return ResponseEntity.ok(questionMapper.questionToQuestionResponseDto(response));
    }
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long id){
        questionService.deleteQuestiion(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
