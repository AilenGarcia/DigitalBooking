package DigitalBooking.DigitalBooking.service;

import DigitalBooking.DigitalBooking.exception.NotFoundException;
import DigitalBooking.DigitalBooking.model.Bookings;
import DigitalBooking.DigitalBooking.model.Client;
import DigitalBooking.DigitalBooking.model.dto.BookingsDTO;
import DigitalBooking.DigitalBooking.model.dto.BookingsDTOExtended;
import DigitalBooking.DigitalBooking.repository.BookingsRepository;
import DigitalBooking.DigitalBooking.repository.ClientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@AllArgsConstructor
public class BookingsService {
    private BookingsRepository bookingsRepository;
    private ProductsService productsService;
    private UsersService usersService;
    private ClientRepository clientRepository;
    private ClientService clientService;


    public BookingsDTOExtended mapear(Bookings b)  throws NotFoundException {
        return new BookingsDTOExtended(b.getId(),b.getCheckIn(),b.getStartDate(),b.getEndDate(),b.getClient().getId(),b.getProducts().getIdProducts(),b.getProducts().getTitle(),b.getProducts().getImages());
    }
    
    public Optional<Bookings> findByIdBookings(Long id) throws NotFoundException {
        if(bookingsRepository.findById(id) == null){throw new NotFoundException("No se encontró la reserva");}
        return bookingsRepository.findById(id);
    }

    public Set<Bookings> findByIdProducts(Long id){
        return bookingsRepository.findByProducts(id);
    }

    public List<BookingsDTOExtended> findForUsers(Long id) throws NotFoundException {
        var user = usersService.findUsersById(id);
        var client = usersService.findByEmailClient(user.get().getEmail());
        var bookings = bookingsRepository.findByUsers(client.getId());
        List<BookingsDTOExtended> listDto = new ArrayList<>();
        for(Bookings booking:bookings){
            listDto.add(mapear(booking));
        }
        return listDto;
    }

    public void saveBooking(BookingsDTO bookingsDTO) throws NotFoundException {

        var checkIn = bookingsDTO.getCheckIn();
        var start_date = bookingsDTO.getStartDate();
        var end_date = bookingsDTO.getEndDate();
        var idProducts= bookingsDTO.getIdProducts();
        var idClient =bookingsDTO.getIdClient();

        Bookings bookings = new Bookings();
        bookings.setCheckIn(checkIn);
        bookings.setStartDate(start_date);
        bookings.setEndDate(end_date);

        var product = productsService.findByIdProduct(idProducts).get();
        bookings.setProducts(product);

        if (usersService.isClient(idClient)){
            var client = usersService.findClientId(idClient);
            bookings.setClient(client.get());
        } else {
            var user = usersService.findUsersById(idClient).get();
            var repeatedEmail = clientService.findByEmail(user.getEmail());
            if (repeatedEmail.isEmpty()){
                Client client = new Client(user.getName(), user.getLastname(), user.getEmail(), user.getPassword(), user.getRoles());
                clientRepository.save(client);
                client.getBookings().add(bookings);
                bookings.setClient(client);
            }
            else{
                bookings.setClient(usersService.findClientId(repeatedEmail.get().getId()).get());
            }
        }
        bookingsRepository.save(bookings);
    }

    public Long existsByDates(Long idProducts, LocalDate startDate, LocalDate endDate){
        return bookingsRepository.existsByDates(idProducts,startDate,endDate);
    }
    }

