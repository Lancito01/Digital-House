package Clases.Extends;

public class Cardiologo extends Medico {

    double valorEstudio;

    public Cardiologo(String nombre, String matricula, double importeBasico) {
        super(nombre, matricula, importeBasico);
    }

    @Override
    double cobrar(double dinero){
        return importeBasico + dinero + valorEstudio;
    }
}
