package DigitalBooking.DigitalBooking.service;

import DigitalBooking.DigitalBooking.model.*;
import DigitalBooking.DigitalBooking.model.dto.CitiesDTO;
import DigitalBooking.DigitalBooking.repository.CitiesRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class CitiesService {
    private CitiesRepository citiesRepository;
    private ObjectMapper mapper;

    public Collection<CitiesDTO> findAllCities(){
        List<Cities> allCities = citiesRepository.findAll();
        Set<CitiesDTO> allCitiesDTO = new HashSet<CitiesDTO>();
        for(Cities cities: allCities)
            allCitiesDTO.add(mapper.convertValue(cities,CitiesDTO.class));

        return allCitiesDTO;
    }
}
