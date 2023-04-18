package DigitalBooking.DigitalBooking.service;

import DigitalBooking.DigitalBooking.config.UploadImageToS3;
import DigitalBooking.DigitalBooking.exception.DuplicatedException;
import DigitalBooking.DigitalBooking.exception.NotFoundException;
import DigitalBooking.DigitalBooking.model.Characteristics;
import DigitalBooking.DigitalBooking.model.Images;
import DigitalBooking.DigitalBooking.model.Products;
import DigitalBooking.DigitalBooking.model.dto.ImagesDTO;
import DigitalBooking.DigitalBooking.model.dto.ProductsDTO;
import DigitalBooking.DigitalBooking.repository.CharacteristicsRepository;
import DigitalBooking.DigitalBooking.repository.ImagesRepository;
import DigitalBooking.DigitalBooking.repository.ProductsRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

@Service
@AllArgsConstructor
public class ProductsService {
    private ProductsRepository productsRepository;
    private ImagesRepository imagesRepository;
    private CharacteristicsRepository characteristicsRepository;
    private UploadImageToS3 uploadimage;
    private ObjectMapper mapper;


    public void saveProductWithImage(ProductsDTO p) throws DuplicatedException {
        Products product = new Products();
        product.setAddress(p.getAddress());
        product.setDescription(p.getDescription());
        product.setDescriptionAddress(p.getDescriptionAddress());
        product.setTitle(p.getTitle());
        product.setCategories(p.getCategories());
        product.setCities(p.getCities());
        product.setLatitude(p.getLatitude());
        product.setLongitude(p.getLongitude());
        product.setHousesRules(p.getHousesRules());
        product.setCancellation(p.getCancellation());
        product.setSafetyHygiene( p.getSafetyHygiene() );
        product.setCharacteristics(p.getCharacteristics());

        productsRepository.save(product);

        for (ImagesDTO imagesDTO : p.getImages()) {
            Images images = new Images();
            images.setTitle(imagesDTO.getTitle());
            images.setUrl(uploadimage.getURL(imagesDTO));
            images.setProducts(product);
            imagesRepository.save(images);
        }
    }

    public void saveProduct(ProductsDTO productsDTO) throws DuplicatedException {
        Products products = mapper.convertValue(productsDTO, Products.class);
        if(productsRepository.exists(Example.of(products))) throw new DuplicatedException("El producto ya esta registrado");
        else{productsRepository.save(products);}}

    public void updateProduct(ProductsDTO productsDTO){
        var id = productsDTO.getIdProducts();
        var address = productsDTO.getAddress();
        var description = productsDTO.getDescription();
        var descAdrress = productsDTO.getDescriptionAddress();
        var stars = productsDTO.getStars();
        var title = productsDTO.getTitle();
        var idCategories = productsDTO.getCategories();
        var idCities = productsDTO.getCities();
        var latitude = productsDTO.getLatitude();
        var longitude = productsDTO.getLongitude();
        var rules = productsDTO.getHousesRules();
        var cancellation = productsDTO.getCancellation();
        var safety = productsDTO.getSafetyHygiene();

        var product = productsRepository.findById(id).get();
        product.setIdProducts(id);
        product.setAddress(address);
        product.setDescription(description);
        product.setDescriptionAddress(descAdrress);
        product.setStars(stars);
        product.setTitle(title);
        product.setCategories(idCategories);
        product.setCities(idCities);
        product.setLatitude(latitude);
        product.setLongitude(longitude);
        product.setHousesRules(rules);
        product.setCancellation(cancellation);
        product.setSafetyHygiene( safety );

        productsRepository.save(product);
    }

    public Collection<Products> findAllProduct(){
        return productsRepository.findAll();}

    public Collection<ProductsDTO> findAllRandom(){
        List<Products> allProducts = productsRepository.findAllRandom();
        Set<ProductsDTO> allProductsDTO = new HashSet<ProductsDTO>();
        for(Products products: allProducts)
            allProductsDTO.add(mapper.convertValue(products,ProductsDTO.class));

        return allProductsDTO;}

    public Optional<Products> findByIdProduct(Long id) throws NotFoundException {
        if(productsRepository.findById(id) == null){throw new NotFoundException("No se encontró el producto");}
        return productsRepository.findById(id);

    }

    public Collection<ProductsDTO> findbycity(String name) throws NotFoundException {
        if(productsRepository.findbycity(name).isEmpty()){ throw new NotFoundException("No existen productos en esa ciudad");}
        List<Products> allProducts = productsRepository.findbycity(name);
        Set<ProductsDTO> allProductsDTO = new HashSet<ProductsDTO>();
        for(Products products: allProducts)
            allProductsDTO.add(mapper.convertValue(products,ProductsDTO.class));
        return allProductsDTO;}

    public Set<ProductsDTO> findByCategories(String title) throws NotFoundException {
        if(productsRepository.findbycity(title)==null){ throw new NotFoundException("No existen productos en esa categoria");}
        else {Set<Products> allProducts = productsRepository.findByCategories(title);
            Set<ProductsDTO> allProductsDTO = new HashSet<ProductsDTO>();
            for(Products products: allProducts)
                allProductsDTO.add(mapper.convertValue(products,ProductsDTO.class));
            return allProductsDTO;}
    }

    public Set<ProductsDTO> findByCityDate(String title, String start, String end){
            List<Products> allProducts = productsRepository.findyByCityDate(title, start,end);
            Set<ProductsDTO> allProductsDTO = new HashSet<ProductsDTO>();
            for(Products products: allProducts)
                allProductsDTO.add(mapper.convertValue(products,ProductsDTO.class));
            return allProductsDTO;}

    public Set<ProductsDTO> findByDates(String start, String end){
        List<Products> allProducts = productsRepository.findByDates(start,end);
        Set<ProductsDTO> allProductsDTO = new HashSet<ProductsDTO>();
        for(Products products: allProducts)
            allProductsDTO.add(mapper.convertValue(products,ProductsDTO.class));
        return allProductsDTO;}

}
