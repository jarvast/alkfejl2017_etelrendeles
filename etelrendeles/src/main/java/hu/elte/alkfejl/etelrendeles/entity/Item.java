package hu.elte.alkfejl.etelrendeles.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "ITEMS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Item extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String name;

    @JoinColumn
    @ManyToOne(targetEntity = Category.class, optional = false)
    @JsonIgnoreProperties("items")
    private Category category;

    @ManyToMany(mappedBy = "items", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("items")
    private List<Order> orderList;

    @Column
    private String description;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private boolean isSpicy;

    @Column(nullable = false)
    private boolean isVegetarian;
}
