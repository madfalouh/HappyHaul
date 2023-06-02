package com.example.nikeBack;

import com.example.nikeBack.Exception.UserNotFoundException;
import com.example.nikeBack.dao.UserDao;
import com.example.nikeBack.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;

import java.util.List;
import java.util.Locale;
import java.util.logging.Logger;

@RestController
public class Controllers {

    private MessageSource messageSource  ;


    public Controllers(MessageSource messageSource) {
        this.messageSource = messageSource ;
    }

    @Autowired
    private UserDao userDao ;


    @GetMapping(path = "/hello/{id}")
    public User findOne(@PathVariable Long id ) {

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(userDao.findById(id)).toUri();

        ResponseEntity.created(location).build() ;

       System.out.print(ResponseEntity.created(location).build());

        return  userDao.findById(id) ;





    }

    @GetMapping(path = "/hello")
    public List<User> findall( ) {
        return userDao.findAll() ;
    }

    @GetMapping (path = "/hello/in")
    public String findalkl( ) {
        Locale  locale = LocaleContextHolder.getLocale() ;
       return messageSource.getMessage("good.morning.message" , null , "Default Message" , locale);
    }



    @GetMapping (path = "/hello/inty")
    public EntityModel<User> finalkl( ) {
        WebMvcLinkBuilder link = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass() ).findall()) ;
        EntityModel<User> entityModel = EntityModel.of(  userDao.findById(1L) );
        entityModel.add(link.withRel("all-users")) ;
        return  entityModel  ;
    }

}
