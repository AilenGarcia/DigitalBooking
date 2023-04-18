package DigitalBooking.DigitalBooking.repository;

import DigitalBooking.DigitalBooking.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends JpaRepository<Roles, Long> {
}
