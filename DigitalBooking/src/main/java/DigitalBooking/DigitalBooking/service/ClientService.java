package DigitalBooking.DigitalBooking.service;

import DigitalBooking.DigitalBooking.model.Client;
import DigitalBooking.DigitalBooking.model.Users;
import DigitalBooking.DigitalBooking.repository.ClientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ClientService {
    private UsersService usersService;
    private ClientRepository clientRepository;

    public Client save(Long idUsuario) {
        var users = usersService.findClientId(idUsuario).get();
        Client client = new Client(users.getName(), users.getLastname(), users.getEmail(), users.getPassword(), users.getRoles());
        client.setBookings(new ArrayList<>());
        return clientRepository.save(client);
    }
    public Optional<Users> findByEmail(String email) {
        return clientRepository.findByEmail(email);
    }

}
