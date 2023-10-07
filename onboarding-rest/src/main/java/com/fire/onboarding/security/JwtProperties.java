package com.fire.onboarding.security;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("security.jwt")
@Getter
@Setter
public class JwtProperties {

    /**
     * Secret key used for issuing JWT
     */
    private String secretKey;
}
