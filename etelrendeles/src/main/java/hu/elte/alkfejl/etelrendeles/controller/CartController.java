package hu.elte.alkfejl.etelrendeles.controller;

import hu.elte.alkfejl.etelrendeles.annotations.Role;
import hu.elte.alkfejl.etelrendeles.entity.Cart;
import hu.elte.alkfejl.etelrendeles.entity.Item;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.USER;
import hu.elte.alkfejl.etelrendeles.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Scope("session")
@RequestMapping("/cart")
public class CartController {
    
    private Cart cart = new Cart();
    
    @Autowired
    private ItemService itemService;
    
    @Role({ADMIN, USER})
    @GetMapping("")
    public ResponseEntity<Iterable<Item>> list() {
        return ResponseEntity.ok(cart.getItems());
    }
    @Role({ADMIN, USER})
    @GetMapping("/full")
    public ResponseEntity<Double> price() {
        return ResponseEntity.ok(cart.getSubTotalCost());
    }
    @Role({ADMIN, USER})
    @DeleteMapping("")
    public ResponseEntity delete() {
        cart.clear();
        return ResponseEntity.ok().build();
    }
    
    @Role({ADMIN, USER})
    @PutMapping("")
    public ResponseEntity<Cart> addItems(@RequestParam("itemId") Long itemId) {
        Item item = itemService.read(itemId);
        cart.addItem(item);
        return ResponseEntity.ok(cart);
    }
}
