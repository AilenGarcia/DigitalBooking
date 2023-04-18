package DigitalBooking.DigitalBooking.model.dto;

import DigitalBooking.DigitalBooking.model.Categories;
import DigitalBooking.DigitalBooking.model.Characteristics;
import DigitalBooking.DigitalBooking.model.Cities;
import DigitalBooking.DigitalBooking.model.Images;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ProductsDTO{
    private Long idProducts;
    private String title;
    private String description;
    private String address;
    private String descriptionAddress;
    private Integer stars;
    private String latitude;
    private String longitude;
    private Cities cities;
    private Categories categories;
    private String housesRules;
    private String cancellation;
    private String safetyHygiene;
    private List<Characteristics> characteristics;
    private List<ImagesDTO> images;
}
