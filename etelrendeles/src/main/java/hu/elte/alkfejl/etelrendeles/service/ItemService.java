package hu.elte.alkfejl.etelrendeles.service;

import hu.elte.alkfejl.etelrendeles.entity.Category;
import hu.elte.alkfejl.etelrendeles.entity.Item;
import hu.elte.alkfejl.etelrendeles.entity.Order;
import hu.elte.alkfejl.etelrendeles.repository.ItemRepository;
import java.util.Map;
import java.util.TreeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public Item create(Item item) {
        return itemRepository.save(item);
    }

    public Iterable<Item> mostFrequent() {
        TreeMap<Integer, Item> sorterMap = new TreeMap<>();
        Iterable<Item> allItems = itemRepository.findAll();
        for (Item item : allItems) {
            int size = item.getOrderList().size();
            sorterMap.put(item.getOrderList().size(), item);
        }
        TreeMap<Integer, Item> limitedMap = sorterMap.entrySet().stream()
                .limit(10)
                .collect(TreeMap::new, (m, e) -> m.put(e.getKey(), e.getValue()), Map::putAll);
        Iterable<Item> iterable = limitedMap.values();
        return iterable;
    }

    public Iterable<Item> searchForName(Category category, String searchWord) {
        return itemRepository.findByNameContainingIgnoreCaseAndCategory(searchWord, category);
    }

    public Item read(long id) {
        return itemRepository.findOne(id);
    }

    public Item update(long id, Item item, Category category) {
        Item currentItem = itemRepository.findOne(id);

        currentItem.setCategory(category);
        currentItem.setDescription(item.getDescription());
        currentItem.setName(item.getName());
        currentItem.setPrice(item.getPrice());
        currentItem.setSpicy(item.isSpicy());
        currentItem.setVegetarian(item.isVegetarian());
        return itemRepository.save(currentItem);

    }

    public Iterable<Item> listByCategory(Category category) {
        return itemRepository.findAllByCategory(category);
    }

    public Iterable<Item> listByOrder(Order order) {
        return order.getItems();
    }

    public void delete(long id) {
        itemRepository.delete(id);
    }

    public Iterable<Item> listAll() {
        return itemRepository.findAll();
    }

}
