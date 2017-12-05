package hu.elte.alkfejl.etelrendeles.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart implements Serializable {

    public List<Item> items = new ArrayList<>();

    private double subTotalCost;
    

    public void clear() {
        subTotalCost = 0.0;
        items.clear();
    }

    public void addItem(Item item) {
        items.add(item);
        subTotalCost = Math.round(subTotalCost + item.getPrice());
    }
    public void undoAddItem() {
        Item lastItem = items.get(items.size()-1);
        items.remove(lastItem);
        subTotalCost = Math.round(subTotalCost - lastItem.getPrice());
    }
}
