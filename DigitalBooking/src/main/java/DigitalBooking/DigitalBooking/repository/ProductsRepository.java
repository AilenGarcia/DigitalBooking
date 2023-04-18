package DigitalBooking.DigitalBooking.repository;

import DigitalBooking.DigitalBooking.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {

    @Override
    List<Products> findAll();

    @Modifying
    @Query(value= "select * from products order by rand()", nativeQuery = true)
    List<Products> findAllRandom();

    @Modifying
    @Query(value = "select p.id_products, p.address, p.description, p.description_address, p.cancellation, p.safety_hygiene, p.houses_rules, p.title, p.id_categories, p.id_cities, p.stars, p.latitude, p.longitude "
            +"from products p "
            + "inner join cities c "
            + "on p.id_cities = c.id_cities "
            + "where c.name = ?1", nativeQuery = true)
    List<Products> findbycity(@Param("name") String name);

    @Modifying
    @Query(value= "select p.id_products, p.address, p.description, p.description_address, p.cancellation, p.safety_hygiene, p.houses_rules, p.title, p.id_categories, p.id_cities, p.stars, p.latitude, p.longitude from products p INNER JOIN categories c ON p.id_categories = c.id_categories WHERE c.title = ?1", nativeQuery = true)
    Set<Products> findByCategories (@Param("title") String title);

    @Modifying
    @Query(value = "select p.id_products, p.address, p.description, p.description_address, p.cancellation, p.safety_hygiene, p.houses_rules, p.title, p.id_categories, p.id_cities, p.stars, p.latitude, p.longitude "
            +"from products p "
            + "inner join cities c on p.id_cities = c.id_cities "
            + "where c.name = ?1 "
            + "AND NOT EXISTS ( SELECT 1 "
            + "from bookings b "
            + "WHERE p.id_products = b.id_products "
            + "AND b.end_date between ?2 AND ?3 "
            + "AND b.start_date between ?2 AND ?3 ) ", nativeQuery = true)
    List<Products> findyByCityDate(@Param("title") String title,@Param("start") String start, @Param("end") String end);

    @Modifying
    @Query(value="select p.id_products, p.address, p.description, p.description_address, p.cancellation, p.safety_hygiene, p.houses_rules, p.title, p.id_categories, p.id_cities, p.stars, p.latitude, p.longitude "
            + "FROM products p "
            + "LEFT JOIN bookings b ON p.id_products = b.id_products "
            + "  AND b.end_date BETWEEN ?1 AND ?2 "
            + "  AND b.start_date BETWEEN ?1 AND ?2 "
            + "WHERE b.id_products IS NULL", nativeQuery = true)
    List<Products> findByDates(@Param("start") String start, @Param("end") String end);

}
