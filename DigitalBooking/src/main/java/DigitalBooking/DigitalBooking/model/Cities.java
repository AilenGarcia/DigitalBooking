package DigitalBooking.DigitalBooking.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Cities {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCities", nullable = false)
    private Long idCities;
    private String name;
    private String province;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idCountries")
    private Countries countries;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "idCities")
    @JsonBackReference
    private List<Products> products;

}
