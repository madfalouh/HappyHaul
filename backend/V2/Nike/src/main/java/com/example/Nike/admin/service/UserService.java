package com.example.Nike.admin.service;

import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Exception.UserNotFoundExceotion;
import com.example.Nike.admin.Repository.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@NoArgsConstructor
@Service
public class UserService {

@Autowired
    private UserRepository userRepository ;

@Autowired
private PasswordEncoder passwordEncoder ;

    public List<User> listUsers () {
        return  userRepository.findAll() ;
    }

    public User save (User user) {

        boolean isUpdatingUser = (user.getId()  !=null) ;

        if(isUpdatingUser) {
           User exstingUser = userRepository.findById(  user.getId() ).get() ;

           if(user.getPassword().isEmpty()  ) {
               user.setPassword(exstingUser.getPassword());
           } else {
               encodePassword(user);
           }
        }

       return userRepository.save(user) ;
    }


private  void encodePassword(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword()) ;
        user.setPassword(encodedPassword);
}

public  boolean isEmailUnique(Integer  id ,  String email) {

      User userByEmail =  userRepository.getUserByEmail(email) ;

    if(userByEmail ==null) return  true ;

    boolean isCreatingNew  =(id == null) ;

    if(isCreatingNew) {

        if(userByEmail != null) return  false ;
    } else {
        if(userByEmail.getId() != null){
            return  false ;
        }
    }
      return true ;
    }




public  void  delete (Integer id) throws UserNotFoundExceotion {
        try {
           User user=  userRepository.findById(id).get() ;
           userRepository.delete(user);
        } catch ( Exception ex ) {
           throw  new UserNotFoundExceotion("f") ;
        }
}



public Optional<User> getUserById (Integer id) {

        return  userRepository.findById(id) ;
}


    public void  enableUser(Integer id  ,  boolean enable ) throws UserNotFoundExceotion {
        User  user  =  userRepository.findById(id).get();
        userRepository.updateEnableSatus(user.getId(), enable);

    }



}

