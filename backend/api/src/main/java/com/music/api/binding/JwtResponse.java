package com.music.api.binding;

import lombok.Data;

@Data
public class JwtResponse {
    private String token;
    private String username;
    private String role;

    public JwtResponse(String accessToken, String username, String role) {
        this.token = accessToken;
        this.username = username;
        this.role = role;
    }
}
