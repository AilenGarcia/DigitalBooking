package DigitalBooking.DigitalBooking.service;

import DigitalBooking.DigitalBooking.model.Client;
import DigitalBooking.DigitalBooking.model.Users;
import DigitalBooking.DigitalBooking.model.dto.UsersDTO;
import DigitalBooking.DigitalBooking.repository.RolRepository;
import DigitalBooking.DigitalBooking.repository.UsersRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@AllArgsConstructor
public class UsersService{
    private UsersRepository usersRepository;
    private RolRepository rolRepository;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    public void saveUser(UsersDTO usersDTO){
       Users users = new Users();
       users.setName(usersDTO.getName());
       users.setLastname(usersDTO.getLastname());
       users.setEmail(usersDTO.getEmail());
       users.setPassword(passwordEncoder.encode(usersDTO.getPassword()));
       users.setRoles(rolRepository.findById(usersDTO.getIdRoles()).get());
       usersRepository.save(users);}

    public boolean isClient(Long idUsers) {
        Optional<Users> user = usersRepository.findById(idUsers);
        return user.isPresent() && user.get() instanceof Client;
    }

    public Optional<Client> findClientId(Long id) {
        Optional<Users> user = usersRepository.findById(id);
        if (user.isPresent() && user.get() instanceof Client) {
            return Optional.of((Client) user.get());
        } else {
            return Optional.empty();
        }
    }
    public Optional<Users> findUsersById(Long id){
        return usersRepository.findById(id);
    }

    public List<Users> findAllUsers(){
         return usersRepository.findAll();}

    public Users findByEmailUser(String email){
        return usersRepository.findByEmailUser(email);}

    public Users findByEmailClient(String email){
        return usersRepository.findByEmailClient(email);}
}
