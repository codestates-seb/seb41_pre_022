package com.stackoverflow.stackoverflow.question.controller;

import com.stackoverflow.stackoverflow.question.dto.QuestionDto;
import com.stackoverflow.stackoverflow.question.mapper.QuestionMapper;
import com.stackoverflow.stackoverflow.question.service.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/")
@Validated
public class QuestionController {
    private QuestionService questionService;
    private QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable @Positive long id){
        return null;
    }

    @GetMapping("/")
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size){
        return null;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post postQuestionDto){
        return null;
    }
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable @Positive long id,
                                        @Valid @RequestBody QuestionDto.Patch patchQuestionDto){
        return null;
    }
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable @Positive long id){
        return null;
    }
}
