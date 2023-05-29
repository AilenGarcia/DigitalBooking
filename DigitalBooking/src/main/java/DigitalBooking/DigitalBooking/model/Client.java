package DigitalBooking.DigitalBooking.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@DiscriminatorValue("Client")
@NoArgsConstructor
public class Client extends Users {

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Bookings> bookings;

    public Client( String nombre, String apellido, String email, String password, Roles rol) {
        super(nombre, apellido, email, password, rol);
        this.bookings = new ArrayList<>();
    }
}
