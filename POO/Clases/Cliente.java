package Clases;

public class Cliente {

    private Integer numeroCliente;
    private String nombre;
    private Double deuda;

    public Cliente (Integer numero, String nombre){
        this.numeroCliente = numero;
        this.nombre = nombre; // es necesario poner this. porque sino no se sabe si se refiere a la variable local o a la global entonces se usa this. para referirse a la global
        this.deuda = 0.0;
    }

    public void incrementarDeuda(Double monto){
        this.deuda += monto;
    }

    public void pagarDeuda(Double monto){
        this.deuda -= monto;
    }

    public Double getDeuda(){
        return this.deuda;
    }

    public String toString(){
        return "Cliente: " + this.numeroCliente + " - " + this.nombre;
    }
}