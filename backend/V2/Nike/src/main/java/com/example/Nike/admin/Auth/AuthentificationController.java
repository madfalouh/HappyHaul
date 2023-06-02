package com.example.Nike.admin.Auth;


import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.service.UserService;
import com.nimbusds.openid.connect.sdk.AuthenticationRequest;
import com.nimbusds.openid.connect.sdk.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping()
public class AuthentificationController {


    private final AuthentificationService service;

    @PostMapping("nikeAdmin/users/auth/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody User request
    ) {
        return ResponseEntity.ok(service.register(request));
    }
    @PostMapping("nikeAdmin/users/auth/login")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody User request
    ) {
        System.out.print("exrctvbfdgvhbnk,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,dfcgvhbjnk");
        return ResponseEntity.ok(service.authenticate(request));
    }


}
