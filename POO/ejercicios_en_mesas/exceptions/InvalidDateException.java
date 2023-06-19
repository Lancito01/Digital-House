package ejercicios_en_mesas.exceptions;

public class InvalidDateException extends Exception {
    public InvalidDateException(){
        super();
    }

    public InvalidDateException(String message){
        super(message);
    }
    
    public String toString(){
        return "" + getClass().getName() + " : " + getMessage() + "";
    }

}
