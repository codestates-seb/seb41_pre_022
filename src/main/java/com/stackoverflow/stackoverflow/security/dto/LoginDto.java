package com.stackoverflow.stackoverflow.security.dto;

import lombok.Data;
import lombok.Getter;

@Getter
@Data
public class LoginDto {
    private String username;
    private String password;
}