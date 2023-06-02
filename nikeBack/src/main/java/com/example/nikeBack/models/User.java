package com.example.nikeBack.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity(name ="user_details ")
public class User {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private  Long id ;
    private  String email ;
    private


    String password ;
    @Size(min = 2 , message = "Name s")
    private String name ;
    private String phone  ;
    private LocalDate createdAt ;
    private LocalDate updatedAt ;
    @PrePersist
    private void  createdAt() {
        this.createdAt = LocalDate.now() ;
        this.updatedAt = LocalDate.now() ;
    }
    @OneToOne
    private  Address Shippingaddress ;



}
