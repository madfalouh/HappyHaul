package com.example.Nike.admin.JwtConfiguration;


import com.example.Nike.admin.Repository.TokenRepository;
import com.example.Nike.admin.service.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
@Component
public class JwtAuthentificationFilter  extends OncePerRequestFilter {

    private final JwtService jwtService ;
    private final UserDetailsService userDetailsService ;
    private final TokenRepository tokenRepository ;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


        if(request.getServletPath().contains("/nikeAdmin/users/auth/")) {
            System.out.print(request.getServletPath());

            filterChain.doFilter(request , response);
return;
        }


        final String authHeader = request.getHeader("Authorization") ;
        final String jwt ;
        final String userEmail ;


        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }


        jwt = authHeader.substring(7) ;

        userEmail = jwtService.extractUsername(jwt) ;

        if(userEmail !=null && SecurityContextHolder.getContext().getAuthentication()==null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail) ;
            var isTokenValid = tokenRepository.findByToken(jwt)
                    .map(t-> !t.isExpired() && !t.isRevoked())
                    .orElse(false) ;

            if(jwtService.isTokenValid(jwt, userDetails) && isTokenValid ) {
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(userDetails , null , userDetails.getAuthorities()) ;

                authToken.setDetails( new WebAuthenticationDetailsSource().buildDetails(request)  );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }

        }

filterChain.doFilter(request , response);



    }
}
