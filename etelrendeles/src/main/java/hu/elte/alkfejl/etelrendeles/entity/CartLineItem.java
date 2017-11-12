package hu.elte.alkfejl.etelrendeles.entity;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartLineItem implements Serializable {

    private Item item;
    private int quantity;
    private double amount;
    private double totalCost;

    public double calculateTotalPrice() {
        return this.getQuantity() * this.getItem().getPrice();
    }
    @Override
    public String toString(){
        return this.getItem().getName() + "-" + this.getQuantity();
    }

}
