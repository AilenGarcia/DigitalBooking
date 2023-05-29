package DigitalBooking.DigitalBooking.model.dto;

import DigitalBooking.DigitalBooking.model.Images;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
public class CategoriesDTO{
    private Long idCategories;
    private String title;
    private String description;
    private Images images;
}
