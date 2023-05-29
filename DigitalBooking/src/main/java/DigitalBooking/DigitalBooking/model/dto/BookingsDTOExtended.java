package DigitalBooking.DigitalBooking.model.dto;

import DigitalBooking.DigitalBooking.model.Images;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public record BookingsDTOExtended(Long id, @JsonFormat(pattern = "HH:mm") LocalTime checkIn,
                                           @JsonFormat(pattern = "yyyy/MM/dd") LocalDate startDate,
                                           @JsonFormat(pattern = "yyyy/MM/dd") LocalDate endDate,
                                           Long idClient, Long idProducts, String title, List<Images> images){}

