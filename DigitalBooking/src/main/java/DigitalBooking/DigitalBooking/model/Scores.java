package DigitalBooking.DigitalBooking.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Scores {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idScores", nullable = false)
    private Long idScores;
    private Integer scores;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idProducts")
    @JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class, property="idProducts")
    private Products products;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_users")
    @JsonIgnore
    private Users users;
}
