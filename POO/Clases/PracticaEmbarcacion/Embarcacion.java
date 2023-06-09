package Clases.PracticaEmbarcacion;

public abstract class Embarcacion {
    double precioBase;
    double valorAdicional;
    int fabricYear;
    double eslora;


    public Embarcacion(double precioBase, double valorAdicional, int fabricYear, double eslora) {
        this.precioBase = precioBase;
        this.valorAdicional = valorAdicional;
        this.fabricYear = fabricYear;
        this.eslora = eslora;
    }

    //TODO
    public void calcularAlquiler(){/*!INCOMPLETE*/}
}
