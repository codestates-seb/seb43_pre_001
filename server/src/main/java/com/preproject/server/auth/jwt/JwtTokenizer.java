package com.preproject.server.auth.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

public class JwtTokenizer {

    // Plain text 형태의 secretKey를 Base64 형식의 문자열로 인코딩
    public String encodedBase64SecretKey(String secretKey) {
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    // Access Token 발급
    public String generateAccessToken(Map<String, Object> claims,
                                      String subject,
                                      Date expiration,
                                      String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        return Jwts.builder()
                .setClaims(claims) // 인증된 사용자 관련 정보가 들어이쓴 claims 추가
                .setSubject(subject) // JWT 제목
                .setIssuedAt(Calendar.getInstance().getTime()) // JWT 발행일자
                .setExpiration(expiration) // JWT 만료일시
                .signWith(key) // 서명을 위한 Key객체 설정
                .compact(); // JWT 생성 & 직렬화
    }

    // Refresh Token 발급
    public String generateRefreshToken(String subject,
                                       Date expiration,
                                       String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    // JWT 서명에 사용될 SecretKey 생성
    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
        byte[] bytes = Decoders.BASE64.decode(base64EncodedSecretKey);
        Key key = Keys.hmacShaKeyFor(bytes);

        return key;
    }

    // JWT 검증 메서드
    public void verifySignature(String jws, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jwts.parserBuilder()
                .setSigningKey(key) // 서명에 사용된 SecretKey 설정
                .build()
                .parseClaimsJws(jws);
    }
}
