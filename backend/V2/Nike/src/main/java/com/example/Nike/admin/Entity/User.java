package com.example.Nike.admin.Entity;

import com.example.Nike.token.Token;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.HashSet;
import java.util.*;

@Entity
@AllArgsConstructor
@Getter
@Setter
@Builder

@NoArgsConstructor
@Table(name = "users")
public class User implements UserDetails {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer  id ;
    @Column(length = 128, nullable = false , unique = true )
    private String email ;
    @Column(length =  64 , nullable = false )
    private String password ;
    @Column( name = "first_name" , length =  64 , nullable = false )
    private  String firstName ;
    @Column( name = "last_name" , length =  64 , nullable = false )
    private String secondName ;
    private boolean enabled ;
    @Column(length =  64 )

    private  String photos ;
    @ManyToMany(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    @JoinTable(name = "users_roles" , joinColumns = @JoinColumn(name = "user_id")
            , inverseJoinColumns = @JoinColumn(name = "role_id"))
     private Set<Role>  roles = new HashSet<>() ;
    public  void addRole(Role role) {
        this.roles.add(role) ; }

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Token> tokens;



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for (Role role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        return authorities  ;
    }

    @Override
    public String getUsername() {
        return this.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
}
