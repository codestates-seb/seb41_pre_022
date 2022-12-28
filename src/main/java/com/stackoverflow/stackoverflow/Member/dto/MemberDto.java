package com.stackoverflow.stackoverflow.Member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class MemberDto {
    @Setter
    @Getter
    public static class Post {
        @NotBlank
        @Email
        private String email;

        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String name;

        @NotBlank
        private String password;
    }
    @AllArgsConstructor
    @Setter
    @Getter
    public static class Patch {
        private long memberid;

        @NotBlank
        private String password;
    }

    @AllArgsConstructor
    @Setter
    @Getter
    public static class response {
        private long memberid;
        private String email;
        private String name;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}