package com.preproject.server.auth.config;

import com.preproject.server.auth.filter.JwtAuthenticationFilter;
import com.preproject.server.auth.handler.MemberAuthenticationFailureHandler;
import com.preproject.server.auth.handler.MemberAuthenticationSuccessHandler;
import com.preproject.server.auth.jwt.JwtTokenizer;
import com.preproject.server.auth.utils.MemberAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.*;

@Configuration
public class SecurityConfiguration {
    private final MemberAuthorityUtils authorityUtils;
    private final JwtTokenizer jwtTokenizer;

    public SecurityConfiguration(MemberAuthorityUtils authorityUtils, JwtTokenizer jwtTokenizer) {
        this.authorityUtils = authorityUtils;
        this.jwtTokenizer = jwtTokenizer;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults()) // corsConfigurationSource라는 이름의 Bean 사용
                .formLogin().disable()
                .httpBasic().disable()
                .apply(new CustomFilterConfigurer()) // CustomFilterConfigurer() 추가
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll());
        return http.build();
    }

    // 패스워드 암호화
    @Bean
    public PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    // CORS 정책 설정
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*")); // 모든 출처에 대해 HTTP 통신 허용
        configuration.setAllowedMethods(Arrays.asList("GET","POST","PATCH","DELETE")); // 해당 HTTP 메서드에 대한 통신 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // 모든 URL에 CORS 정책 적용

        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            // getSharedObject()로 SecurityConfigurer 간 공유되는 객체 획득
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/members/login");

            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler()); // 로그인 인증 성공 시 처리
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler()); // 로그인 인증 실패 시 처리

            builder.addFilter(jwtAuthenticationFilter); // JwtAuthenticationFilter를 Spring Security Filter Chain에 추가
        }
    }

}
