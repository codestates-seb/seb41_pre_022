package com.stackoverflow.stackoverflow.Answer.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class AnswerPatchDto {
    private long answerId;
    @NotBlank(message = "답변 작성을 하지 않을 경우 수정이 불가합니다.")
    private String answerBody;
}
