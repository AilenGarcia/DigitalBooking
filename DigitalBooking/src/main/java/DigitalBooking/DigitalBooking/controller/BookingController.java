package DigitalBooking.DigitalBooking.controller;

import DigitalBooking.DigitalBooking.exception.NotFoundException;
import DigitalBooking.DigitalBooking.model.Bookings;
import DigitalBooking.DigitalBooking.model.Products;
import DigitalBooking.DigitalBooking.model.dto.BookingsDTO;
import DigitalBooking.DigitalBooking.service.BookingsService;
import DigitalBooking.DigitalBooking.service.ProductsService;
import DigitalBooking.DigitalBooking.service.UsersService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping(value = "/bookings")
public class BookingController {
    private BookingsService bookingsService;
    private ProductsService productsService;
    private UsersService usersService;

    @GetMapping("/findProducts/{id}")
    public ResponseEntity<?> findByProducts(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(bookingsService.findByIdProducts(id));
    }

    @GetMapping("/findByUser/{id}")
    public ResponseEntity<?> findByUsers(@PathVariable Long id) throws NotFoundException {
        return ResponseEntity.ok(bookingsService.findForUsers(id));
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) throws NotFoundException {

        Optional<Bookings> bookingsOptional = bookingsService.findByIdBookings(id);

        return bookingsOptional.isEmpty()
                ? ResponseEntity.status(HttpStatus.NOT_FOUND).body("Id: " + id + ", no pertenece a ninguna Reserva")
                : ResponseEntity.ok(bookingsOptional);
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveBooking(@Valid @RequestBody BookingsDTO bookingsDTO) throws NotFoundException {

        Long idProduct = bookingsDTO.getIdProducts();
        Long idClient = bookingsDTO.getIdClient();


        Optional<Products> productOptional = productsService.findByIdProduct(idProduct);
        var userOptional = usersService.findUsersById(idClient);

        if (productOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("idProducto : " + idProduct + " no pertenece a ningun producto");
        }

        if (bookingsService.existsByDates(bookingsDTO.getIdProducts(), bookingsDTO.getStartDate(), bookingsDTO.getEndDate())>0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Ya existe una reserva para el mismo producto y un rango de fechas que se superpone");
        }

        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("idCliente : " + idClient + " no pertenece a ningun Cliente");
        }
        bookingsService.saveBooking(bookingsDTO);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body("Reserva se guardó con éxito");
    }
}
