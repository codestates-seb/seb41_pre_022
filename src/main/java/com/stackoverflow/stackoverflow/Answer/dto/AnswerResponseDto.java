package com.stackoverflow.stackoverflow.Answer.dto;

import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;

    private String answerBody;
}
