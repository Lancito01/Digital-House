package ejercicios_en_mesas.FactoryPelota;

public class Pelota extends Producto {
    double radio;

    public Pelota(double peso, double radio) {
        super(peso);
        this.radio = radio;
    }

    @Override
    public double calcularEspacio() {
        return 4/3 * Math.PI * Math.pow(radio, 3); // Volumen de una esfera es 4/3 * PI * radio^3
    }
    
}
