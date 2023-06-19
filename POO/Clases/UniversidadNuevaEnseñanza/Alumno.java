package Clases.UniversidadNuevaEnseñanza;

public class Alumno {
    String nombre, apellido, legajo;

    public Alumno(String nombre, String apellido, String legajo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.legajo = legajo;
    }

    public String toString(){
        return(
            "> Nombre: " + this.nombre + "\n" +
            "> Apellido: " + this.apellido + "\n" +
            "> Legajo: " + this.legajo
        );
    }
}