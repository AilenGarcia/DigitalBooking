package DigitalBooking.DigitalBooking.controller;

import DigitalBooking.DigitalBooking.exception.DuplicatedException;
import DigitalBooking.DigitalBooking.model.Users;
import DigitalBooking.DigitalBooking.model.dto.UsersDTO;
import DigitalBooking.DigitalBooking.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping(value = "/users")
public class UsersController {
    private UsersService usersService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody UsersDTO usersdto) throws DuplicatedException {
        usersService.saveUser(usersdto);
        return new ResponseEntity<>("saved users",null, HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Users>> findAll() {
        return new ResponseEntity<>(usersService.findAllUsers(),null, HttpStatus.OK);
    }

    @GetMapping("/findByEmail/{email}")
    public ResponseEntity<?> findByEmail(@PathVariable String email) {
        return ResponseEntity.ok(usersService.findByEmailUser(email));
    }

}
