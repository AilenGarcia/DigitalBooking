package DigitalBooking.DigitalBooking.controller;

import DigitalBooking.DigitalBooking.exception.DuplicatedException;
import DigitalBooking.DigitalBooking.exception.NotFoundException;
import DigitalBooking.DigitalBooking.model.Images;
import DigitalBooking.DigitalBooking.model.dto.ImagesDTO;
import DigitalBooking.DigitalBooking.service.ImagesService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping(value = "/images")
public class ImagesController {

    private ImagesService imagesService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody ImagesDTO imagesDTO) throws DuplicatedException {
        imagesService.save(imagesDTO);
        return new ResponseEntity<>("saved image",null, HttpStatus.CREATED);
    }

    @GetMapping("/findProductsWithImages/{id}")
    public ResponseEntity<Collection<Images>> findProductsWithImages(@PathVariable Long id)throws NotFoundException {
        return  new ResponseEntity<>(imagesService.findProductsWithImages(id), null, HttpStatus.OK);
    }
}
