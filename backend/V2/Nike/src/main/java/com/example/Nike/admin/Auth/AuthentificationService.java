package com.example.Nike.admin.Auth;


import com.example.Nike.admin.Entity.Role;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Repository.RoleRepository;
import com.example.Nike.admin.Repository.TokenRepository;
import com.example.Nike.admin.Repository.UserRepository;
import com.example.Nike.admin.service.JwtService;
import com.example.Nike.token.Token;
import com.example.Nike.token.TokenType;
import com.nimbusds.openid.connect.sdk.AuthenticationRequest;
import com.nimbusds.openid.connect.sdk.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class AuthentificationService    {

    private final UserRepository repository ;
    private final TokenRepository tokenRepository ;
    private final PasswordEncoder passwordEncoder ;
    private final JwtService jwtService ;
    private final AuthenticationManager authenticationManager ;

    private  final RoleRepository roleRepository ;

    public AuthenticationResponse register(User user ) {
        System.out.println("fcl:kg;lc:fdvgkclf:dgc:xdg :xdtgvcrfdxesztgrfcdexsz");

        Set<Role> persistedRoles = new HashSet<>();
        for (Role role : user.getRoles()) {

            Role persistedRole = roleRepository.findByName(role.getName());
            if (persistedRole == null) {
                persistedRole = roleRepository.save(new Role(role.getId()));
            }
            persistedRoles.add(persistedRole);
        }

        var use = User.builder()
                .firstName(user.getFirstName())
                .secondName(user.getSecondName())
                .email(user.getEmail())
                .password(passwordEncoder.encode(user.getPassword()))

                .roles(persistedRoles) // use the persisted roles here
                .build();



        var refreshToken = jwtService.generateToken(use);

        var savedUser = repository.save(use) ;
        saveUserToken(savedUser, refreshToken);

        var jwToken= jwtService.generateToken(use) ;

        return (AuthenticationResponse) AuthResponse.builder().accessToken(jwToken).build();


    }


    public AuthenticationResponse authenticate(User use) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        use.getEmail(),
                        use.getPassword()
                )
        );
        var user = repository.findByEmail(use.getEmail()) ;
        var jwtToken = jwtService.generateToken(user);
        revokeAllUserTokens((User) user);
        saveUserToken((User) user, jwtToken);



        return (AuthenticationResponse) AuthResponse.builder()
                .accessToken(jwtToken)
                .build();
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.listAllTokens(user.getId())    ;
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }


    private void saveUserToken(User user, String jwtToken) {


        System.out.print(jwtToken);

        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }


}
