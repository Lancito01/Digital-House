package ExamenParcial;

public class Mecanico {
    String nombre, apellido, legajo;

    public Mecanico(String nombre, String apellido, String legajo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.legajo = legajo;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getLegajo() {
        return this.legajo;
    }

    public void setLegajo(String legajo) {
        this.legajo = legajo;
    }
}
