package DigitalBooking.DigitalBooking;

import DigitalBooking.DigitalBooking.model.Users;
import DigitalBooking.DigitalBooking.repository.UsersRepository;
import DigitalBooking.DigitalBooking.service.UsersService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class DigitalBookingApplication {

	public static void main(String[] args) {SpringApplication.run(DigitalBookingApplication.class, args);}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE", "PATCH");
			}
		};

	}
}



