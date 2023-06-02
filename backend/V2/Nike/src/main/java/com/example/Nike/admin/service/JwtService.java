package com.example.Nike.admin.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import java.security.Key;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;
import java.util.random.RandomGenerator;

@Service
public class JwtService {



    String secretkey = "3ckNqO1ZxKMTlhwqu8z1aQ8prhEPEPmXv67WmHKasME=";

    private long jwtExpiration =1000*64 ;



    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }





    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }



private Date extractExpiration(String token) {
return  extractClaim(token , Claims::getExpiration) ;

}

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }
    public String generateToken(
            HashMap<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return buildToken(extraClaims, userDetails, jwtExpiration);
    }

private Claims extractAllClaims(String token) {
    return Jwts.parserBuilder().setSigningKey(getSignINkey())
            .build().parseClaimsJwt(token).getBody() ;
}


private  boolean isTokenExpired(String token) {

        return  extractExpiration(token).before(new Date()) ;

}


private  String buildToken( HashMap<String , Object> extraClaims , UserDetails userDetails , long expiration ) {
        return  Jwts.builder().setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(  new Date(System.currentTimeMillis())  )
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getSignINkey() , SignatureAlgorithm.HS256)
                .compact() ;
}


    private  Key getSignINkey() {
        byte[] keyBytes = Decoders.BASE64URL.decode(secretkey) ;
                return Keys.hmacShaKeyFor(keyBytes);
    }


    public boolean isTokenValid(String token , UserDetails userDetails) {
        String username = extractUsername(token) ;
        return  (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

}
