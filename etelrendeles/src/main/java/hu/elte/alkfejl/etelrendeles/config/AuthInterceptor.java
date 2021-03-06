package hu.elte.alkfejl.etelrendeles.config;

import hu.elte.alkfejl.etelrendeles.entity.User;
import hu.elte.alkfejl.etelrendeles.service.UserService;
import hu.elte.alkfejl.etelrendeles.annotations.Role;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Component
public class AuthInterceptor extends HandlerInterceptorAdapter{
    
    @Autowired
    private UserService userService;
    
    //minden route előtt a preHandle futtatása
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler){
        List<User.Role> routeRoles = getRoles((HandlerMethod) handler);
        User user = userService.getUser();
        
        //ha nincs megszorítás átengedjük a usert
        if (routeRoles.isEmpty() || routeRoles.contains(User.Role.GUEST)){
            return true;
        }
        //role check
        if (userService.isLoggedIn() && routeRoles.contains(user.getRole())){
            return true;
        }
        response.setStatus(401);
        return false;
    }
    
    private List<User.Role> getRoles(HandlerMethod handler){
        Role role = handler.getMethodAnnotation(Role.class);
        return role == null ? Collections.emptyList() : Arrays.asList(role.value());
    }
}
