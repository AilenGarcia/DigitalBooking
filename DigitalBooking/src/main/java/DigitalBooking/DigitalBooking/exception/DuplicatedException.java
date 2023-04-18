package DigitalBooking.DigitalBooking.exception;

public class DuplicatedException extends Exception{
    public DuplicatedException (){
        super("El objeto ya existe");
    }

    public DuplicatedException(String message){
        super(message);
    }
}
