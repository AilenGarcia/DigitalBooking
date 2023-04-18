package DigitalBooking.DigitalBooking.repository;

import DigitalBooking.DigitalBooking.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ImagesRepository extends JpaRepository<Images, Long> {
    @Modifying
    @Query(value = "select images.id_images, images.title, images.url, images.id_products from images "
            + "left JOIN products "
            + "ON products.id_products = images.id_products "
            + "where images.id_products= ?1", nativeQuery = true)
    List<Images> findProductsWithImages(@Param("idProducts") Long id);

    @Query(value = "select * from images where title=?1 limit 1", nativeQuery = true)
    Optional<Images> findByTitle(@Param("title")String title);
}
