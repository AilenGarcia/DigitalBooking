package DigitalBooking.DigitalBooking.controller;

import DigitalBooking.DigitalBooking.model.Characteristics;
import DigitalBooking.DigitalBooking.service.CharacteristicsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping(value = "/characteristics")
public class CharacteristicsController {
    private CharacteristicsService characteristicsService;

    @GetMapping("/list")
    public ResponseEntity<Collection<Characteristics>> findAll() {
        return new ResponseEntity<>(characteristicsService.findAll(),null, HttpStatus.OK);
    }
}
