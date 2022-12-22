package com.stackoverflow.stackoverflow.feature.Question.mapper;

import com.stackoverflow.stackoverflow.feature.Question.dto.QuestionDto;
import com.stackoverflow.stackoverflow.feature.Question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto);
    Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto);
    QuestionDto.Response questionToQuestionResponseDto(Question question);
    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);
}
