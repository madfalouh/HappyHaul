package com.example.Nike.admin.Controller;


import com.example.Nike.admin.Entity.User;
import com.example.Nike.admin.Exception.UserNotFoundExceotion;
import com.example.Nike.admin.FileUploadUtil;
import com.example.Nike.admin.service.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.util.List;

@Controller
@Transactional
public class UserController {

    @Autowired
    private UserService service ;




    @GetMapping("/users")
    @ResponseBody
    public List<User> listAll() {
        return service.listUsers();
    }


    @PostMapping("/users/new")
    @ResponseBody
    public String createUser(@RequestBody   User user , @RequestBody MultipartFile multipartFile) throws IOException {
       // service.save(user) ;
        System.out.print(multipartFile.getOriginalFilename());
        String filename = StringUtils.cleanPath(multipartFile .getOriginalFilename() ) ;
        String uploadDir = "user-photos" ;

        FileUploadUtil.saveFile(uploadDir , filename , multipartFile);
       return "redirect:/users" ;

    }


    @PostMapping("/users/auth")
    @ResponseBody
    public String user() {




        return null ;

    }

    @PostMapping("/users/img")
    @ResponseBody
    public String img(@RequestBody MultipartFile multipartFile) {
        // service.save(user) ;
        System.out.print(multipartFile.getOriginalFilename());
        return "redirect:/users" ;

    }

    @GetMapping("/redirect")
    public String redirect(RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute("redirect", true);
        return "redirect:/users";
    }

    @PostMapping("/users/check_email")
    public  String checkDuplicateEmail(@Param("email")  String email ) {

      //  return service.isEmailUnique(email)  ?"OK" : "Duplicated" ;
        return  null ;
    }

    @PostMapping("/users/delete/{id}")
    public  String deleteUser(@Param("id") Integer id  , RedirectAttributes redirectAttributes ) {
        redirectAttributes.addFlashAttribute("message"  , " Deleted succefuly") ;
        try {
            service.delete(id) ;
        } catch (UserNotFoundExceotion e) {
          redirectAttributes.addFlashAttribute("message" , e.getMessage()) ;
        }

        return  "redirect:/users" ;
    }



    @GetMapping("users/edit/{id}")
    public String editUserForm(@PathVariable(name = "id")  Integer id   , RedirectAttributes redirectAttributes ) {

        User user = null ;
try {

   user =  service.getUserById(id).get() ;

} catch (Exception ex) {
    redirectAttributes.addFlashAttribute("message"  , ex.getMessage()) ;

        }


        return  "redirect:/users" ;
    }

@PutMapping("users/{id}/enable/{status}")
public String  enableUser( @PathVariable("id") Integer id ,  @PathVariable("status") boolean status , RedirectAttributes redirectAttributes  ) throws UserNotFoundExceotion {

    try {
        service.enableUser( id , status) ;
    } catch (UserNotFoundExceotion e) {
        throw new UserNotFoundExceotion("not found");
    }

    redirectAttributes.addFlashAttribute("message" , "message" ) ;

return  "redirect:/users" ;


}




}
