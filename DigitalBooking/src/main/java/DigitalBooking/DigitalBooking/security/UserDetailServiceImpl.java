package DigitalBooking.DigitalBooking.security;
import DigitalBooking.DigitalBooking.model.Users;
import DigitalBooking.DigitalBooking.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users user = usersRepository.findByEmailUser(email);
        if(user == null) {
            throw new UsernameNotFoundException("Usuario o password inválidos");
        }
        return new UserDetailsImpl(user);
    }
}
