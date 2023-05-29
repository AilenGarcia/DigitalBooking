package DigitalBooking.DigitalBooking.repository;

import DigitalBooking.DigitalBooking.model.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Set;

@Repository
public interface BookingsRepository extends JpaRepository<Bookings, Long> {

    @Query(value="SELECT COUNT(*) > 0 "
            + "FROM bookings "
            + "WHERE id_products = ?1 "
            + "AND end_date >= ?3 "
            + "AND start_date <= ?2", nativeQuery = true)
            Long existsByDates(@Param("products") Long idProducts, @Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    @Query(value= "Select * from bookings where id_products = ?1", nativeQuery = true)
    Set<Bookings> findByProducts (@Param("id") Long idProduct);

    @Query(value= "Select * from bookings where client_id = ?1", nativeQuery = true)
    Set<Bookings> findByUsers (@Param("id") Long idClient);

}
