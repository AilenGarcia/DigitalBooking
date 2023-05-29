package DigitalBooking.DigitalBooking.controller;

import DigitalBooking.DigitalBooking.exception.DuplicatedException;
import DigitalBooking.DigitalBooking.exception.NotFoundException;
import DigitalBooking.DigitalBooking.model.Products;
import DigitalBooking.DigitalBooking.model.dto.ProductsDTO;
import DigitalBooking.DigitalBooking.service.ProductsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Set;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping(value = "/products")
public class ProductsController {

    private ProductsService productsService;

    @GetMapping("/list")
    public ResponseEntity<Collection<Products>> findAll() {
        return new ResponseEntity<>(productsService.findAllProduct(),null, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity findById(@PathVariable Long id) throws NotFoundException {
        return new ResponseEntity<>(productsService.findByIdProduct(id),null, HttpStatus.OK);
    }

    @GetMapping("/listForCity/{name}")
    public ResponseEntity<Collection<ProductsDTO>> findForCity(@PathVariable String name) throws NotFoundException {
        return  new ResponseEntity<>(productsService.findbycity(name), null, HttpStatus.OK);
    }

    @GetMapping("/listForDates/{start}/{end}")
    public ResponseEntity<Collection<ProductsDTO>> findByDates(@PathVariable String start, @PathVariable String end) {
        Set<ProductsDTO> product = productsService.findByDates(start, end);
        return  new ResponseEntity<>(product, null, HttpStatus.OK);
    }

    @Transactional
    @GetMapping(path = "/filter/{name}/{start}/{end}")
    public ResponseEntity<Collection<ProductsDTO>> filter(@PathVariable String name, @PathVariable String start, @PathVariable String end){
        Set<ProductsDTO> product = productsService.findByCityDate(name, start, end);
        return  new ResponseEntity<>(product, null, HttpStatus.OK);
    }

    @Transactional
    @GetMapping("/listByCategory/{title}")
    public ResponseEntity<Set<ProductsDTO>> update(@PathVariable String title) throws NotFoundException {
        return new ResponseEntity<>(productsService.findByCategories(title), null, HttpStatus.OK);
    }

    @GetMapping("/listRandom")
    public ResponseEntity<Collection<ProductsDTO>> findRandom(){
        return new ResponseEntity<>(productsService.findAllRandom(),null, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody ProductsDTO productsDTO) throws DuplicatedException {
        productsService.saveProduct(productsDTO);
        return new ResponseEntity<>("saved product",null, HttpStatus.CREATED);
    }

    @PostMapping("/saveWithImages")
    public ResponseEntity<String> saveProductWithImage(@RequestBody ProductsDTO productsDTO) throws DuplicatedException {
        productsService.saveProductWithImage(productsDTO);
        return new ResponseEntity<>("saved product", HttpStatus.CREATED);
    }

    @PostMapping("/update")
    public ResponseEntity<String> update(@RequestBody ProductsDTO productsDTO){
        productsService.updateProduct(productsDTO);
        return new ResponseEntity<>("update product",null, HttpStatus.CREATED);
    }

}
