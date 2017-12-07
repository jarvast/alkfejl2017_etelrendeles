package hu.elte.alkfejl.etelrendeles.service;

import hu.elte.alkfejl.etelrendeles.entity.User;
import hu.elte.alkfejl.etelrendeles.repository.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
@Data
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private User user;

    public User login(User user) throws UserNotValidException {
        if (isValid(user)) {
            this.user = userRepository.findByUsername(user.getUsername());
            this.user.initCart();
            System.out.println(this.user.getCart());
            return this.user;
        }
        throw new UserNotValidException();
    }

    public User register(User user) {
        user.setRole(User.Role.USER);
        this.user = userRepository.save(user);
        this.user.initCart();
        return this.user;
    }

    public boolean isValid(User user) {
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()).isPresent();
    }

    public boolean isLoggedIn() {
        return user != null;
    }

    public User getLoggedInUser() {
        return user;
    }

    public void logout() {
        user = null;
    }
}
