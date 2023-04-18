package DigitalBooking.DigitalBooking.service;
import DigitalBooking.DigitalBooking.model.Categories;
import DigitalBooking.DigitalBooking.model.dto.CategoriesDTO;
import DigitalBooking.DigitalBooking.repository.CategoriesRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class CategoriesService {

    private CategoriesRepository categoriesRepository;
    private ObjectMapper mapper;

    public void saveCategory(CategoriesDTO categoriesDTO){
        Categories categories = mapper.convertValue(categoriesDTO, Categories.class);
        categoriesRepository.save(categories);
    }

    public Collection<CategoriesDTO> findAllCategories(){
        List<Categories> allCategories = categoriesRepository.findAll();
        Set<CategoriesDTO> allCategoriesDTO = new HashSet<CategoriesDTO>();
        for(Categories categories: allCategories)
            allCategoriesDTO.add(mapper.convertValue(categories,CategoriesDTO.class));

        return allCategoriesDTO;
    }


    public void modifyCategory(Long id, String description){
        categoriesRepository.update(description, id);
    }

    public void deleteCategory(Long id){
        categoriesRepository.deleteById(id);
    }

}
