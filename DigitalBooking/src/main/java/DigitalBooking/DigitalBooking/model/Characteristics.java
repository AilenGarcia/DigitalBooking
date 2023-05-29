package DigitalBooking.DigitalBooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@Entity
public class Characteristics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCharacteristics", nullable = false)
    private Long idCharacteristics;
    private String icons;
    private String title;

    @JsonIgnore
    @ManyToMany(mappedBy = "characteristics")
    private List<Products> products;
}
