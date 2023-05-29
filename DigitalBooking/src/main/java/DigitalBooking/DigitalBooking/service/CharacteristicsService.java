package DigitalBooking.DigitalBooking.service;

import DigitalBooking.DigitalBooking.model.Characteristics;
import DigitalBooking.DigitalBooking.repository.CharacteristicsRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@AllArgsConstructor
public class CharacteristicsService {

    private CharacteristicsRepository characteristicsRepository;

    public Collection<Characteristics> findAll(){
        return characteristicsRepository.findAll();}
}
