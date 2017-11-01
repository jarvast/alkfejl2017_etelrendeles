package hu.elte.alkfejl.etelrendeles.repository;

import hu.elte.alkfejl.etelrendeles.entity.Order;
import hu.elte.alkfejl.etelrendeles.entity.Order.Status;
import hu.elte.alkfejl.etelrendeles.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {

    Iterable<Order> findAllByUser(User user);

    Iterable<Order> findAll();

    Order save(Order order);
    
    Iterable<Order> findByStatus(Status status);
    
    Iterable<Order> findByNameContainingIgnoreCase(String searchWord);
    
    Iterable<Order> findByAddressContainingIgnoreCase(String searchWord);

}
