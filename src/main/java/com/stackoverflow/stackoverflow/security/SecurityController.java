package com.stackoverflow.stackoverflow.security;

import com.stackoverflow.stackoverflow.Member.dto.MemberDto;
import com.stackoverflow.stackoverflow.Member.entity.Member;
import com.stackoverflow.stackoverflow.Member.mapper.MemberMapper;
import com.stackoverflow.stackoverflow.Member.service.MemberService;
import com.stackoverflow.stackoverflow.global.dto.SingleResponseDto;
import com.stackoverflow.stackoverflow.security.dto.LoginDto;
import com.stackoverflow.stackoverflow.security.dto.LoginResponse;
import com.stackoverflow.stackoverflow.security.jwt.JwtAuthenticationFilter;
import com.stackoverflow.stackoverflow.security.jwt.TokenInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
public class SecurityController {

    private final SecurityService securityService;
    private final MemberService memberService;
    private final MemberMapper mapper;

    @PostMapping("/signUp")
    public ResponseEntity signup(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);
        Member createdMember = memberService.createMember(member);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(createdMember)),
                HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginDto loginDto) {
        String username = loginDto.getUsername();
        String password = loginDto.getPassword();
        TokenInfo tokenInfo = securityService.login(username, password);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtAuthenticationFilter.AUTHORIZATION_HEADER, "Bearer" + tokenInfo.getAccessToken());

        return new ResponseEntity(tokenInfo, httpHeaders, HttpStatus.OK);
    }

    //권한 설정 테스트용
    @PostMapping("/auth/user")
    public String test(){
        return "User Auth success";
    }

    @PostMapping("/auth/admin")
    public String admin(){
        return "Only Admin Access";
    }
}