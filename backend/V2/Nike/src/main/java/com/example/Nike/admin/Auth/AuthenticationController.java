package com.example.Nike.admin.Auth;

import com.example.Nike.admin.Exception.UserAlreadyExistException;
import com.example.Nike.admin.Exception.WrongCredentialsException;
import com.example.Nike.admin.Repository.UserRepository;
import com.example.Nike.admin.Rsponse.AuthenticationResponse;
import com.example.Nike.admin.Controller.AuthenticationService;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Security.JwtService;
import com.example.Nike.request.GoogleAuthRequest;
import com.google.api.client.json.jackson2.JacksonFactory;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Collections;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5174")

public class AuthenticationController {

    private final AuthenticationService service;

    private final UserRepository repository ;

    private final JwtService jwtService ;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody User request) throws UserAlreadyExistException {
        return ResponseEntity.ok().body(service.register(request));
    }

    @PostMapping("/authenticate")
    @ResponseBody
    public ResponseEntity  authenticate(@RequestBody User request
    ) throws WrongCredentialsException {
        System.out.println("LLLLLLLLLLLLLLLLLLLLLLLLL*******j,ik;l:kj,ik;kkkkkkkkkkkkkkk****************************************************LLLLLLLL");
        System.out.println(request);

        return ResponseEntity.ok().body(service.authenticate(request));
    }


    @PostMapping("/refresh-token")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        service.refreshToken(request, response);
    }

    @PostMapping("/google-authenticate")
    public ResponseEntity authenticateWithGoogle(@RequestBody GoogleAuthRequest request) throws WrongCredentialsException, Exception {
        String emailFromGoogle = verifyGoogleToken(request.getGoogleToken());

        User user = (User) repository.findByEmail(emailFromGoogle);

        if (user == null) {
            user = registerNewUserFromGoogle(request.getGoogleToken());
        }

        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user, true);


    //    saveUserToken(user, jwtToken);

        return ResponseEntity.ok(AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .build());
    }

    private User registerNewUserFromGoogle(String tokenId) {
        GoogleIdToken.Payload payload = getPayloadFromToken(tokenId);

        String email = payload.getEmail();
        String name = (String) payload.get("name");
        String pictureUrl = (String) payload.get("picture");

        User newUser = new User();
        newUser.setEmail(email);
        newUser.setFirstName(name);
        newUser.setSecondName(name);
        // Store other details as needed (like picture URL)

        // You might want to set a default role or any other necessary defaults

        return newUser;
    }

    private GoogleIdToken.Payload getPayloadFromToken(String tokenId) {
        try {
            JacksonFactory jacksonFactory = new JacksonFactory();

            GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), jacksonFactory)
                    .setAudience(Collections.singletonList("238602174686-hupc7111dk4ve7hoft6im4c1ffmcfdar.apps.googleusercontent.com"))
                    .build();

            GoogleIdToken idToken = verifier.verify(tokenId);
            if (idToken != null) {
                return idToken.getPayload();
            } else {
                throw new IllegalArgumentException("Invalid token");
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to validate the Google token.", e);
        }
    }



    private String verifyGoogleToken(String tokenId) throws Exception {
        JacksonFactory jacksonFactory = new JacksonFactory();

        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), jacksonFactory)
                .setAudience(Collections.singletonList("238602174686-hupc7111dk4ve7hoft6im4c1ffmcfdar.apps.googleusercontent.com"))
                .build();

        GoogleIdToken idToken = verifier.verify(tokenId);
        if (idToken != null) {
            Payload payload = idToken.getPayload();

            // Check if the user is a valid user by checking user's email
            String email = payload.getEmail();

            // You can also get other information about the user like name, picture, etc.
            // String name = (String) payload.get("name");
            // String pictureUrl = (String) payload.get("picture");

            return email;
        } else {
            throw new IllegalArgumentException("Invalid token");
        }
    }



}




