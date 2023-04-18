package DigitalBooking.DigitalBooking.controller;

import DigitalBooking.DigitalBooking.model.dto.CitiesDTO;
import DigitalBooking.DigitalBooking.service.CitiesService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping(value = "/cities")
public class CitiesController {
    private CitiesService citiesService;

    @GetMapping("/list")
    public ResponseEntity<Collection<CitiesDTO>> findAll() {
        return new ResponseEntity<>(citiesService.findAllCities(),null,HttpStatus.OK);
    }
}
