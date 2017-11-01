package hu.elte.alkfejl.etelrendeles.repository;

import hu.elte.alkfejl.etelrendeles.entity.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long>{
     Iterable<Category> findAll();
}