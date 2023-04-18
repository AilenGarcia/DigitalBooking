package DigitalBooking.DigitalBooking.security;
import DigitalBooking.DigitalBooking.authentication.AuthenticationRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) throws AuthenticationException {

        AuthenticationRequest authCredentials = new AuthenticationRequest();

        try{
            authCredentials = new ObjectMapper().readValue(request.getReader(),AuthenticationRequest.class);
        }catch (IOException e){
        }
        UsernamePasswordAuthenticationToken usernamePat = new UsernamePasswordAuthenticationToken(
                authCredentials.getUsername(),
                authCredentials.getPassword(),
                Collections.emptyList()
        );
        return getAuthenticationManager().authenticate(usernamePat);
    }

    /*MANDA TOKEN POR EL BODY COMO JSON*/
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {

        UserDetailsImpl userDetails = (UserDetailsImpl) authResult.getPrincipal();
        String token = JwtUtil.createToken(userDetails.getNombre(),userDetails.getUsername());

        Map<String, String> tokenMap = new HashMap<>();
        tokenMap.put("token", token);

        ObjectMapper mapper = new ObjectMapper();
        String jsonToken = mapper.writeValueAsString(tokenMap);

        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(jsonToken);
        response.getWriter().flush();

        super.successfulAuthentication(request, response, chain, authResult);
    }

   /*
   MANDA TOKEN POR LOS HEADERS.
   @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        UserDetailsImpl user = (UserDetailsImpl) authResult.getPrincipal();
        String token = JwtUtil.createToken(user.getNombre(),user.getUsername());

        response.addHeader("Authorization","Bearer "+token);
        response.getWriter().flush();

        super.successfulAuthentication(request, response, chain, authResult);
    }*/
}
