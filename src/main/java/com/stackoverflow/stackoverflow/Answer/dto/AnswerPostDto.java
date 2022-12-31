package com.stackoverflow.stackoverflow.Answer.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@NoArgsConstructor
public class AnswerPostDto {
    private long answerId;

    @NotBlank(message = "답변 작성을 하지 않을 경우 등록이 불가합니다.")
    private String answerBody;
}
