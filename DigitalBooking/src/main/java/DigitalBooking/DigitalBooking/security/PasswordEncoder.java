package DigitalBooking.DigitalBooking.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class PasswordEncoder {
    @Bean
    public BCryptPasswordEncoder PasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    /*public static void main(String[] args) {
        System.out.println("Ailen pass: 123456"+new BCryptPasswordEncoder().encode("123456"));}*/
}