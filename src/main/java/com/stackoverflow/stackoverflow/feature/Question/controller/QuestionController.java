package com.stackoverflow.stackoverflow.feature.Question.controller;

import com.stackoverflow.stackoverflow.feature.Question.dto.QuestionDto;
import com.stackoverflow.stackoverflow.feature.Question.entity.Question;
import com.stackoverflow.stackoverflow.feature.Question.mapper.QuestionMapper;
import com.stackoverflow.stackoverflow.feature.Question.service.QuestionService;
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
        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(response)), HttpStatus.CREATED);
    }
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long id,
                                        @Valid @RequestBody QuestionDto.Patch patchQuestionDto){
        Question response = questionService.
                updateQuestion(id, questionMapper.questionPatchDtoToQuestion(patchQuestionDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(response)), HttpStatus.OK);
    }
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable @Positive long id){
        questionService.deleteQuestiion(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
