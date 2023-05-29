package DigitalBooking.DigitalBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import DigitalBooking.DigitalBooking.model.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{

    @Query(value= "select * from users u where email=?1 AND tipo='USERS'", nativeQuery = true)
    Users findByEmailUser (@Param("email") String email);

    @Query(value= "select * from users u where email=?1 AND tipo='CLIENT'", nativeQuery = true)
    Users findByEmailClient (@Param("email") String email);

}
