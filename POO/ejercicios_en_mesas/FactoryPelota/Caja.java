package ejercicios_en_mesas.FactoryPelota;

public class Caja extends Producto {
    double longitud, ancho, altura;

    public Caja(double peso, double longitud, double ancho, double altura) {
        super(peso);
        this.longitud = longitud;
        this.ancho = ancho;
        this.altura = altura;
    }

    @Override
    public double calcularEspacio() {
        return longitud * ancho * altura;
    }

}
