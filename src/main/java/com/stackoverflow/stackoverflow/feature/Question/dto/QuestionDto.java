package com.stackoverflow.stackoverflow.feature.Question.dto;

import com.stackoverflow.stackoverflow.feature.Question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
public class QuestionDto {
    @AllArgsConstructor
    @Getter
    public static class Post{
        @NotBlank(message = "제목 작성을 하지 않을 경우 등록이 불가합니다.")
        private String questionTitle;
        @NotBlank(message = "질문내용 작성을 하지 않을 경우 등록이 불가합니다.")
        private String questionBody;
    }
    @AllArgsConstructor
    @Getter
    public static class Patch{
        private long questionId;
        private String questionTitle;
        @NotBlank(message = "질문내용 수정을 하지 않을 경우 등록이 불가합니다.")
        private String questionBody;
        public void setQuestionId(long questionId) {
            this.questionId = questionId;
        }
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response{
        private long questionId;
        private String questionTitle;
        private String questionBody;
    }
}
