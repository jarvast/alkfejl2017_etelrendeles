package hu.elte.alkfejl.etelrendeles.controller;

import hu.elte.alkfejl.etelrendeles.annotations.Role;
import hu.elte.alkfejl.etelrendeles.entity.Category;
import hu.elte.alkfejl.etelrendeles.entity.Item;
import hu.elte.alkfejl.etelrendeles.entity.Order;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.GUEST;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.USER;
import hu.elte.alkfejl.etelrendeles.service.CategoryService;
import hu.elte.alkfejl.etelrendeles.service.ItemService;
import hu.elte.alkfejl.etelrendeles.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private OrderService orderService;

    @Role({ADMIN, USER})
    @GetMapping("/items")
    private ResponseEntity<Iterable<Item>> list() {
        return ResponseEntity.ok(itemService.listAll());
    }

    
    @GetMapping("/items/max")
    private ResponseEntity<Iterable<Item>> mostFrequent() {
        return ResponseEntity.ok(itemService.mostFrequent());
    }

    /*@Role({ADMIN, USER})
    @GetMapping("/category/{id}/item/search/{keyWord}")
    private ResponseEntity<Iterable<Item>> searchForNameInCategory(@PathVariable(value = "id") Long categoryId, @PathVariable(value = "keyWord") String searchWord) {
        return ResponseEntity.ok(itemService.searchForName(categoryService.read(categoryId), searchWord));
    }*/

    @GetMapping("/categories/{id}/items")
    private ResponseEntity<Iterable<Item>> listByCategory(@PathVariable(value = "id") Long categoryId) {
        Category category = categoryService.read(categoryId);
        return ResponseEntity.ok(itemService.listByCategory(category));
    }

    @GetMapping("/order/{id}/items")
    private ResponseEntity<Iterable<Item>> listByOrder(@PathVariable(value = "id") Long orderId) {
        Order order = orderService.read(orderId);
        return ResponseEntity.ok(itemService.listByOrder(order));
    }

    @Role({ADMIN})
    @PostMapping("/items/new")
    public ResponseEntity<Item> create(@RequestBody Item item) {
        return ResponseEntity.ok(itemService.create(item));
    }

   /* @Role(ADMIN)
    @PutMapping("/category/{categoryId}/item/{itemId}")
    private ResponseEntity<Item> update(@PathVariable(value = "categoryId") long categoryId, @PathVariable(value = "itemId") long itemId, @RequestBody Item item) {
        Item updated = itemService.update(itemId, item, categoryService.read(categoryId));
        return ResponseEntity.ok(updated);
    }*/

    @Role({ADMIN, USER, GUEST})
    @GetMapping("/categories/{categoryId}/items/{itemId}")
    private ResponseEntity<Item> read(@PathVariable(value = "categoryId") long categoryId, @PathVariable(value = "itemId") long itemId) {
        Item read = itemService.read(itemId);
        //System.out.println(read.getOrderList().toString());
        return ResponseEntity.ok(read);
    }

    /*@Role(ADMIN)
    @DeleteMapping("/category/{categoryId}/item/{itemId}")
    private ResponseEntity delete(@PathVariable(value = "categoryId") long categoryId, @PathVariable(value = "itemId") long itemId) {
        itemService.delete(itemId);
        return ResponseEntity.ok().build();
    }*/

}
