package DigitalBooking.DigitalBooking.exception;

public class NotFoundException  extends Exception{

    public NotFoundException (){
        super("No se encontro el recurso");
    }

    public NotFoundException(String message){
        super(message);
    }
}
