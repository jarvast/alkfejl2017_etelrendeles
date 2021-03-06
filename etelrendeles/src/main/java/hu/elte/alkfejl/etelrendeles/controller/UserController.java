package hu.elte.alkfejl.etelrendeles.controller;

import hu.elte.alkfejl.etelrendeles.entity.User;
import hu.elte.alkfejl.etelrendeles.service.UserNotValidException;
import hu.elte.alkfejl.etelrendeles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    
    @GetMapping("")
    public ResponseEntity<User> user(){
        if (userService.isLoggedIn()){
            return ResponseEntity.ok(userService.getLoggedInUser());
        }
        return ResponseEntity.badRequest().build();
    }
    
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user){
        try{
            return ResponseEntity.ok(userService.login(user));
        }
        catch (UserNotValidException e){
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user){
        return ResponseEntity.ok(userService.register(user));
    }
    
    @PostMapping("/logout")
    public ResponseEntity logout(@RequestBody User user){
        userService.logout();
        return ResponseEntity.ok(204);
    }
    
}
