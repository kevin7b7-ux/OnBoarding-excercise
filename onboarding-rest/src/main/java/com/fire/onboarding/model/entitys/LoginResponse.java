package com.fire.onboarding.model.entitys;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
public class LoginResponse {
    private String accessToken;
}
