package DigitalBooking.DigitalBooking.model.dto;

import DigitalBooking.DigitalBooking.model.Products;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ImagesDTO{
    private Long idImages;
    private String title;
    private String url;
    private Products products;
}
