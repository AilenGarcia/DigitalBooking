package DigitalBooking.DigitalBooking.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idProducts", nullable = false)
    private Long idProducts;
    private String title;
    private String description;
    private String housesRules;
    private String cancellation;
    private String safetyHygiene;
    private String address;
    private String descriptionAddress;
    private Integer stars;
    private String longitude;
    private String latitude;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "idProducts")
    @JsonBackReference
    private List<Images> images;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "idProducts")
    @JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class, property="idProducts")
    private List<Scores> scores;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "idProducts")
    @JsonIgnore
    private List<Bookings> bookings;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "idCities")
    private Cities cities;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "idCategories")
    private Categories categories;

    @ManyToMany(cascade = {CascadeType.MERGE})
    private List<Characteristics> characteristics;

}
