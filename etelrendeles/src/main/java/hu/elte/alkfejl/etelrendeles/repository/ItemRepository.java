package hu.elte.alkfejl.etelrendeles.repository;

import hu.elte.alkfejl.etelrendeles.entity.Category;
import hu.elte.alkfejl.etelrendeles.entity.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Long> {
    
    Iterable<Item> findAllByCategory(Category category);
    
    Iterable<Item> findByNameContainingIgnoreCaseAndCategory(String searchWord, Category category);
    

}
