package com.example.Nike.admin.Repository;


import com.example.Nike.admin.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User , Integer> {
@Query("SELECT u FROM User  u where u.email = :email")
     User getUserByEmail(  String email ) ;

  Long countById(Integer id) ;

@Query("UPDATE User u  set u.enabled=:status  where  u.id=:id   ")
@Modifying
     void updateEnableSatus( Integer id , boolean status) ;


    UserDetails findByEmail(String username);
}
