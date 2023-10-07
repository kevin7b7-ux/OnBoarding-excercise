package com.fire.onboarding.rest;

import com.fire.onboarding.model.entitys.LoginRequest;
import com.fire.onboarding.model.entitys.LoginResponse;
import com.fire.onboarding.security.JwtIssuer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthController {

    @Autowired
    private JwtIssuer jwtIssuer;

    @PostMapping("auth/login")
    public LoginResponse login(@RequestBody @Validated LoginRequest request){

        var token = jwtIssuer.issue(1L, request.getEmail(), List.of("USER"));
        return LoginResponse.builder()
                .accessToken(token)
                .build();
    }
}
