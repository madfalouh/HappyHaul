package com.example.Nike.token;

import com.example.Nike.admin.Entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.oauth2.core.OAuth2AccessToken;

@Entity
@Table(name = "tokens")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    public String token ;

    @Enumerated(EnumType.STRING)
    public TokenType tokenType = TokenType.BEARER;


    public boolean revoked ;

    public boolean expired ;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    public User user ;

}
