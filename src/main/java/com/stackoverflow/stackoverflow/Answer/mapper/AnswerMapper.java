package com.stackoverflow.stackoverflow.Answer.mapper;

import com.stackoverflow.stackoverflow.Answer.dto.AnswerPatchDto;
import com.stackoverflow.stackoverflow.Answer.dto.AnswerPostDto;
import com.stackoverflow.stackoverflow.Answer.dto.AnswerResponseDto;
import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import org.mapstruct.Mapper;

/* TODO Mapper 진행상황
*   1. postDto >> Entity 변경
*   2. patchDto >> Entity 변경
*   3. Entity >> responseDto 변경 구현*/
@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
