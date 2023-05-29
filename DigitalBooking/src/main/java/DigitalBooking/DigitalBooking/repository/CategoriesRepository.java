package DigitalBooking.DigitalBooking.repository;

import DigitalBooking.DigitalBooking.model.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriesRepository extends JpaRepository<Categories, Long> {
    @Override
    List<Categories> findAll();
    @Modifying
    @Query(value= "update categories c set c.description= ?1 where c.id_categories= ?2", nativeQuery = true)
    void update(@Param("description") String description, @Param("id") Long id);

}
