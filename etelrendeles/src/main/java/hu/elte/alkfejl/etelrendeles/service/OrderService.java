package hu.elte.alkfejl.etelrendeles.service;

import hu.elte.alkfejl.etelrendeles.entity.Item;
import hu.elte.alkfejl.etelrendeles.entity.Order;
import hu.elte.alkfejl.etelrendeles.entity.Order.Status;
import hu.elte.alkfejl.etelrendeles.entity.User;
import hu.elte.alkfejl.etelrendeles.entity.User.Role;
import hu.elte.alkfejl.etelrendeles.repository.OrderRepository;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Iterable<Order> listByRole(User user) {
        Role role = user.getRole();
        if (role == Role.USER) {
            return orderRepository.findAllByUser(user);
        } else if (role == Role.ADMIN) {
            return orderRepository.findAll();
        }
        return Collections.emptyList();
    }

    public Order create(Order order, User user) {
        order.setStatus(Order.Status.IDLE);
        order.setReceived(Timestamp.valueOf(LocalDateTime.now()));
        order.setUser(user);
        return orderRepository.save(order);
    }

    public Iterable<Order> searchForStatus(Status status) {
        return orderRepository.findByStatus(status);
    }

    public Iterable<Order> searchForName(String searchWord) {
        return orderRepository.findByNameContainingIgnoreCase(searchWord);
    }

    public Iterable<Order> searchForAddress(String searchWord) {
        return orderRepository.findByAddressContainingIgnoreCase(searchWord);
    }

    public Order update(long id, Order order) {
        Order currentOrder = orderRepository.findOne(id);

        currentOrder.setAddress(order.getAddress());
        currentOrder.setName(order.getName());
        currentOrder.setPhone(order.getPhone());
        currentOrder.setDelivered(order.getDelivered());
        currentOrder.setItems(order.getItems());
        currentOrder.setStatus(order.getStatus());

        return orderRepository.save(currentOrder);
    }

    public Order deliver(Order oldOrder) {
        oldOrder.setStatus(Status.DELIVERED);
        oldOrder.setDelivered(Timestamp.valueOf(LocalDateTime.now()));
        
        return orderRepository.save(oldOrder);
    }
    
    public void delete(long id) {
        orderRepository.delete(id);
    }

    public Order read(long id) {
        return orderRepository.findOne(id);
    }
}
