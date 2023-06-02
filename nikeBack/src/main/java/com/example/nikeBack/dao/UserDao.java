package com.example.nikeBack.dao;

import com.example.nikeBack.Exception.UserNotFoundException;
import com.example.nikeBack.models.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Predicate;


@Component
public class UserDao {


    public static List<User> users  = new ArrayList<>() ;


    static {
        users.add(new User( 1L , "emai" , "pass" , "na" , "jkj" , null , null , null   )   );
        users.add(new User( 2L , "emai" , "pass" , "na" , "jkj" , null , null , null   )   );
    }

    public List<User> findAll() {

        return  users ;
    }

    public User findById(Long id) {
        Predicate<? super User> predicate = user -> {  return user.getId().equals(id) ; } ;


        Optional<User> user = users.stream().filter(predicate).findFirst();


      return  user.orElseThrow(  () ->{   return  new UserNotFoundException("non")  ; } ) ;
    }



}
