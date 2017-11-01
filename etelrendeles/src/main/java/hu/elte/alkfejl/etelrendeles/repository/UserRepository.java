package hu.elte.alkfejl.etelrendeles.repository;

import hu.elte.alkfejl.etelrendeles.entity.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByEmail(String email);

    User findByUsername(String username);

    Optional<User> findByUsernameAndPassword(String username, String password);
}
