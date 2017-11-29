package hu.elte.alkfejl.etelrendeles.controller;

import hu.elte.alkfejl.etelrendeles.annotations.Role;
import hu.elte.alkfejl.etelrendeles.entity.Item;
import hu.elte.alkfejl.etelrendeles.entity.Order;
import hu.elte.alkfejl.etelrendeles.entity.Order.Status;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.USER;
import hu.elte.alkfejl.etelrendeles.service.ItemService;
import hu.elte.alkfejl.etelrendeles.service.OrderService;
import hu.elte.alkfejl.etelrendeles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @Autowired
    private ItemService itemService;

    @Role({ADMIN, USER})
    @GetMapping("")
    public ResponseEntity<Iterable<Order>> list() {
        return ResponseEntity.ok(orderService.listByRole(userService.getLoggedInUser()));
    }

    @Role({ADMIN, USER})
    @PostMapping("")
    public ResponseEntity<Order> create(@RequestBody Order order) {
        System.out.println("rendelés: " + order.getItems());
        return ResponseEntity.ok(orderService.create(order, userService.getLoggedInUser()));
    }

    /*@Role({USER})
    @PutMapping("/addItem")
    public ResponseEntity<Order> addItems(@RequestBody Item[] items , Model model) {
        Order updatedOrder = orderService.read();
        Item item = itemService.read(itemId);

        if (updatedOrder != null) {
            updatedOrder.getItems().add(item);
        }
        orderService.update(id, updatedOrder);
        return ResponseEntity.ok(updatedOrder);
    }*/

    @Role(ADMIN)
    @GetMapping("/searchStatus")
    private ResponseEntity<Iterable<Order>> searchForStatus(@RequestParam("status") Status status) {
        return ResponseEntity.ok(orderService.searchForStatus(status));
    }

    @Role(ADMIN)
    @GetMapping("/searchName")
    private ResponseEntity<Iterable<Order>> searchForName(@RequestParam("name") String searchWord) {
        return ResponseEntity.ok(orderService.searchForName(searchWord));
    }

    @Role(ADMIN)
    @GetMapping("/searchAddress")
    private ResponseEntity<Iterable<Order>> searchForAddress(@RequestParam("address") String searchWord) {
        return ResponseEntity.ok(orderService.searchForAddress(searchWord));
    }

    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<Order> update(@PathVariable long id, @RequestBody Order order) {
        Order updated = orderService.update(id, order);
        return ResponseEntity.ok(updated);
    }

    @Role({ADMIN, USER})
    @GetMapping("/{id}")
    private ResponseEntity<Order> read(@PathVariable(value = "id", required = true) String id) {
        Order read = orderService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read);
    }

    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable long id) {
        orderService.delete(id);
        return ResponseEntity.ok().build();
    }
}
