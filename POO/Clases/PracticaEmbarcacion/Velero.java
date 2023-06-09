package Clases.PracticaEmbarcacion;

public class Velero extends Embarcacion {
    int cantidadMastiles;

    public Velero(double precioBase, double valorAdicional, int fabricYear, double eslora, int cantidadMastiles){
        super(precioBase, valorAdicional, fabricYear, eslora);
        this.cantidadMastiles = cantidadMastiles;
    }
    
    //TODO
    public boolean evaluarTamanio(){
        return false;
    }

}
