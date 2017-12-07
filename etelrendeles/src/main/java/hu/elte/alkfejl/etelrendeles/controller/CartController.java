package hu.elte.alkfejl.etelrendeles.controller;

import hu.elte.alkfejl.etelrendeles.annotations.Role;
import hu.elte.alkfejl.etelrendeles.entity.Cart;
import hu.elte.alkfejl.etelrendeles.entity.Item;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.USER;
import hu.elte.alkfejl.etelrendeles.service.ItemService;
import hu.elte.alkfejl.etelrendeles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Scope("session")
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private ItemService itemService;

    @Autowired
    private UserService userService;

    @Role({ADMIN, USER})
    @GetMapping("")
    public ResponseEntity<Iterable<Item>> list() {
        return ResponseEntity.ok(userService.getLoggedInUser().getCart().getItems());
    }

    @Role({ADMIN, USER})
    @GetMapping("/full")
    public ResponseEntity<Double> price() {
        return ResponseEntity.ok(userService.getLoggedInUser().getCart().getSubTotalCost());
    }

    @Role({ADMIN, USER})
    @DeleteMapping("/del")
    public ResponseEntity deleteCart() {
        userService.getLoggedInUser().getCart().clear();
        return ResponseEntity.ok(204);
    }

    @Role({ADMIN, USER})
    @PostMapping("")
    public ResponseEntity<Cart> addItems(@RequestBody Long itemId) throws FullCartException {
        Item item = itemService.read(itemId);
        Cart cart = userService.getLoggedInUser().getCart();
        cart.addItem(item);
        if (cart.getSubTotalCost() > 20000) {
            cart.undoAddItem();
            throw new FullCartException();
        }
        return ResponseEntity.ok(userService.getLoggedInUser().getCart());
    }

    private static class FullCartException extends Exception {

        public FullCartException() {
            System.out.println("");
        }
    }
}
