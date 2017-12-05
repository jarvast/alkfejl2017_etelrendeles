package hu.elte.alkfejl.etelrendeles.controller;

import hu.elte.alkfejl.etelrendeles.annotations.Role;
import hu.elte.alkfejl.etelrendeles.entity.Category;
import hu.elte.alkfejl.etelrendeles.entity.Item;
import hu.elte.alkfejl.etelrendeles.entity.Order;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.GUEST;
import static hu.elte.alkfejl.etelrendeles.entity.User.Role.USER;
import hu.elte.alkfejl.etelrendeles.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("")
    public ResponseEntity<Iterable<Category>> list() {
        return ResponseEntity.ok(categoryService.listAll());
    }
    
    @GetMapping("/{id}")
    private ResponseEntity<Category> read(@PathVariable(value = "id", required = true) String id) {
        Category category = categoryService.read(Integer.parseInt(id));
        return ResponseEntity.ok(category);
    }
    
    @Role({ADMIN})
    @PostMapping("/new")
    public ResponseEntity<Category> create(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.create(category));
    }

}
