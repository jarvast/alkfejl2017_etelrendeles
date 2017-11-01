package hu.elte.alkfejl.etelrendeles.service;

import hu.elte.alkfejl.etelrendeles.entity.Category;
import hu.elte.alkfejl.etelrendeles.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category read(long id) {
        return categoryRepository.findOne(id);
    }

    public Iterable<Category> listAll() {
        return categoryRepository.findAll();
    }
}
