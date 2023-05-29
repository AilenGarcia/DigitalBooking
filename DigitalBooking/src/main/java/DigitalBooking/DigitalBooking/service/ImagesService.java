package DigitalBooking.DigitalBooking.service;

import DigitalBooking.DigitalBooking.config.UploadImageToS3;
import DigitalBooking.DigitalBooking.exception.DuplicatedException;
import DigitalBooking.DigitalBooking.exception.NotFoundException;
import DigitalBooking.DigitalBooking.model.Images;
import DigitalBooking.DigitalBooking.model.dto.ImagesDTO;
import DigitalBooking.DigitalBooking.repository.ImagesRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@AllArgsConstructor
public class ImagesService {

    private ImagesRepository imagesRepository;
    private UploadImageToS3 uploadimage;

    public void save(ImagesDTO imagesDTO) throws DuplicatedException {
        var idProduct = imagesDTO.getProducts();
        var title = imagesDTO.getTitle();
        var image = new Images();
        image.setProducts(idProduct);
        image.setUrl(uploadimage.getURL(imagesDTO));
        image.setTitle(title);
        if(imagesRepository.findByTitle(title).isEmpty()){imagesRepository.save(image);}
        else{throw new DuplicatedException("El titulo ya existe");}
    }

        public Collection<Images> findProductsWithImages(Long id) throws NotFoundException {
            if(imagesRepository.findById(id) == null){throw new NotFoundException("No se encontró el producto");}
            else{
                return imagesRepository.findProductsWithImages(id);}
        };

    }
