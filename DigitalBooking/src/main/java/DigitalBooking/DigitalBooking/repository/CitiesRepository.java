package DigitalBooking.DigitalBooking.repository;

import DigitalBooking.DigitalBooking.model.Cities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CitiesRepository extends JpaRepository<Cities, Long> {

    @Override
    List<Cities> findAll();

}
