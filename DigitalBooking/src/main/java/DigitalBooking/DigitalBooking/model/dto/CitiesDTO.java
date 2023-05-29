package DigitalBooking.DigitalBooking.model.dto;

import DigitalBooking.DigitalBooking.model.Countries;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class CitiesDTO{
    private Long idCities;
    private String name;
    private String province;
    private Countries countries;
}
