package hu.elte.alkfejl.etelrendeles.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "CATEGORIES")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Category extends BaseEntity {

    @OneToMany(targetEntity = Item.class, mappedBy = "category")
    @JsonIgnore
    private List<Item> items;

    @Column(nullable = false, unique = true)
    private String name;
}
