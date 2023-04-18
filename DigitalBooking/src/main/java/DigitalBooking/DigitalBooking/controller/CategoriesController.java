package DigitalBooking.DigitalBooking.controller;

import DigitalBooking.DigitalBooking.model.dto.CategoriesDTO;
import DigitalBooking.DigitalBooking.service.CategoriesService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping(value = "/categories")
public class CategoriesController {
    private CategoriesService categoriesService;

    @GetMapping("/list")
    public ResponseEntity<Collection<CategoriesDTO>> findAll() {
        return new ResponseEntity<>(categoriesService.findAllCategories(),null,HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody CategoriesDTO categories){
        categoriesService.saveCategory(categories);
        return new ResponseEntity<>("saved category",null, HttpStatus.CREATED);
    }

    @Transactional
    @PutMapping("/modify/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody String description){
        categoriesService.modifyCategory( id, description);
        return new ResponseEntity<>("modified category", null, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id){
        categoriesService.deleteCategory(id);
        return new ResponseEntity<>("Category deleted", null, HttpStatus.OK);
    }
}
