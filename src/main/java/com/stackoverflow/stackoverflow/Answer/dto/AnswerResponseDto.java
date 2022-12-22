package com.stackoverflow.stackoverflow.Answer.dto;

import com.stackoverflow.stackoverflow.Answer.entity.Answer;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AnswerResponseDto {
    private long answerId;

    private String answerBody;

    @Builder
    public void Response(Answer answer){
        this.answerId = answer.getAnswerId();
        this.answerBody = answer.getAnswerBody();
    }
}
