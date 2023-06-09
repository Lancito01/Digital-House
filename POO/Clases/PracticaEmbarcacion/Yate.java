package Clases.PracticaEmbarcacion;

public class Yate extends Embarcacion implements Comparable {
    int cantidadCamarotes;

    public Yate(double precioBase, double valorAdicional, int fabricYear, double eslora, int cantidadCamarotes) {
        super(precioBase, valorAdicional, fabricYear, eslora);
        this.cantidadCamarotes = cantidadCamarotes;
    }

    @Override
    //TODO
    public int compareTo(Yate yate) {
        throw new UnsupportedOperationException("Unimplemented method 'compareTo'");
    }
    
}
