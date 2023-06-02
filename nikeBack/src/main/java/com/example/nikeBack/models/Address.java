package com.example.nikeBack.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
public class Address {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private  Long id ;
    private String  streetAddress ;

    private int UnitNumber ;



}
