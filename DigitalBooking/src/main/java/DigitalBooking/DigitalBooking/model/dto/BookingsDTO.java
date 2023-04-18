package DigitalBooking.DigitalBooking.model.dto;

import DigitalBooking.DigitalBooking.model.Products;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
public class BookingsDTO {
    @JsonFormat(pattern = "HH:mm")
    private LocalTime checkIn;
    @JsonFormat(pattern = "yyyy/MM/dd")
    private LocalDate startDate;
    @JsonFormat(pattern = "yyyy/MM/dd")
    private LocalDate endDate;
    private Long idClient;
    private Long idProducts;
}
