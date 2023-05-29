package DigitalBooking.DigitalBooking.model.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UsersDTO {
    private String name;
    private String lastname;
    private String email;
    private String password;
    private Long idRoles;

}
