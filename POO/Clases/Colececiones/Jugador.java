package Clases.Colececiones;

public class Jugador {

    public String nombre;
    public int nroCamiseta;
    public boolean lesionado;
    public boolean titular;

    public Jugador(String nombre, int nroCamiseta) {
        this.nombre = nombre;
        this.nroCamiseta = nroCamiseta;
    }

    @Override
    public String toString() {
        return "{" +
            " nombre='" + getNombre() + "'" +
            ", nroCamiseta='" + getNroCamiseta() + "'" +
            ", lesionado='" + isLesionado() + "'" +
            ", titular='" + isTitular() + "'" +
            "}";
    }


    public String getNombre() {
        return this.nombre;
    }

    public int getNroCamiseta() {
        return this.nroCamiseta;
    }

    public boolean isLesionado() {
        return this.lesionado;
    }

    public boolean isTitular() {
        return this.titular;
    }

    public void setTitular(boolean titular){
        this.titular = titular;
    }

}
