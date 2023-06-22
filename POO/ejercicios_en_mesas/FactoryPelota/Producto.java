package ejercicios_en_mesas.FactoryPelota;

public abstract class Producto {
    double peso;
    
    public Producto(double peso) {
        this.peso = peso;
    }

    public abstract double calcularEspacio();

    @Override
    public String toString() {
        return "{" +
            " peso='" + getPeso() + "'" +
            "}";
    }

    private String getPeso() {
        return peso + " kg";
    }

}
