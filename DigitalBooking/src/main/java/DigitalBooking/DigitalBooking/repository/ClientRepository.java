package DigitalBooking.DigitalBooking.repository;

import DigitalBooking.DigitalBooking.model.Client;
import DigitalBooking.DigitalBooking.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    public Optional<Users> findByEmail(String email);
}
