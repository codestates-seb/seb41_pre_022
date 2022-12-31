package com.stackoverflow.stackoverflow.Answer.dto;

import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private String answerBody;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
