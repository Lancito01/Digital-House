package Clases.Extends;

public class Medico {

    String nombre;
    String matricula;
    double importeBasico;

    public Medico(String nombre, String matricula, double importeBasico){
        this.nombre = nombre;
        this.matricula = matricula;
        this.importeBasico = importeBasico;
    }

    double cobrar(double dinero){
        return importeBasico + dinero;
    }
    
}
