package com.example.Nike.Entity;


import com.example.Nike.admin.Entity.Role;
import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Repository.UserRepository;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.springframework.test.util.AssertionErrors.assertNotNull;
import static org.springframework.test.util.AssertionErrors.assertTrue;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback( value = false)

public class UserRepositoryTest {

    @Autowired
    private UserRepository repository ;


    @Autowired
    private TestEntityManager entityManager ;
    @Test
    public void  creatUser() {
        Role role = entityManager.find(Role.class , 1)  ;
        User userName = new User(null , "name@codejava.net" , "nam2020" , "Nam" , "Reda" , true  , null , new HashSet<>() , null) ;
//        System.out.print(role.getId());
        userName.addRole(role);
        repository.save(userName) ;
    }

    @Test
    public void testCrestUserWithTwoRoles () {
        User userName = new User(null , "name@email.net" , "nam2023" , "Nam" , "Reda" , true  , null , new HashSet<>() , null) ;
        Role roleEditor = new Role(3) ;
        Role roleAssistant = new Role(5) ;
        userName.addRole(roleEditor);
        userName.addRole(roleAssistant);

        System.out.print(roleEditor.getDescription()  );

       User savedUser = repository.save(userName) ;
       assertThat(savedUser.getId()).isGreaterThan(0)     ;

    }

    @Test
    public void testListAllUsers () {
        Iterable<User> listUsers = repository.findAll() ;
        listUsers.forEach( user ->{
            System.out.print(user);
            assertThat(user.getId()).isGreaterThan(0) ;
        } );
    }

    @Test
    public void getUserById () {
        Optional<User> user = repository.findById(1) ;

        assertThat(user.get().getId()).isGreaterThan(0) ;
    }

    @Test
    public void testUpdateUserDetails() {
        // Arrange
        final int userId = 1;
        final String newFirstName = "pause";


        Optional<User> optionalUser = repository.findById(userId);


        assertTrue("User not found in the repository", optionalUser.isPresent());

        User user = optionalUser.get();
        String oldFirstName = user.getFirstName();

        user.setFirstName(newFirstName);
        User updatedUser = repository.save(user);

        assertNotNull("Updated user should not be null", updatedUser);
        assertNotEquals( oldFirstName, updatedUser.getFirstName());
        assertEquals( newFirstName, updatedUser.getFirstName());
    }


    @Test
    public void testUpdateUserRoles() {
        // Arrange
        final int userId = 2;
        final Role role1 = new Role(2)  ;

        final Role role3 = new Role(4)  ;

        final Set<Role> roles = new HashSet<>() ;
        roles.add(role1) ;
        roles.add(role3) ;
        Optional<User> optionalUser = repository.findById(userId);
        assertTrue("User not found in the repository", optionalUser.isPresent());
        User user = optionalUser.get();
        Set<Role> oldRoles =  user.getRoles();
        user.setRoles(roles);
         user.getRoles().stream().forEach(role -> System.out.print(role.getId()));
        User updatedUser = repository.save(user);
        assertNotNull("Updated user should not be null", updatedUser);
        assertNotEquals( oldRoles, updatedUser.getRoles()  );
        assertEquals( roles, updatedUser.getRoles()  );
    }


    @Test
    public void deleteUser() {
        final int userId = 27;
        repository.delete(   repository.findById(userId).get()  );

    }


    @Test
    public  void testGetUserByEmail() {
        String email ="name@email.net" ;
        User user = repository.getUserByEmail(email) ;

        assertThat(user).isNotNull() ;

    }

    @Test

    public void testCountById() {
        Integer id =1 ;
        Long coutById = repository.countById(id) ;
        assertThat(coutById).isGreaterThan(0) ;
    }




    @Test
    public void disableUser() {
        repository.updateEnableSatus(1  , false);

    }

    @Test
    public void enableUser() {
        repository.updateEnableSatus(1  , true);

    }

}
