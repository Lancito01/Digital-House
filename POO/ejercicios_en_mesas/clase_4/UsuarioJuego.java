package ejercicios_en_mesas.clase_4;

public class UsuarioJuego {
    private String nombre;
    private String clave;
    Integer puntaje;
    Integer nivel;

    public UsuarioJuego(String nombre, String clave) {
        this.nombre = nombre;
        this.clave = clave;
        this.puntaje = 0;
        this.nivel = 0;
    }

    public void aumentarPuntaje() {
        this.puntaje++;
    }

    public void subirNivel() {
        this.nivel++;
    }

    public void bonus(Integer valor) {
        this.puntaje += valor;
    }

    //! Opcional
    public String toString() {
        return "\nUsuario:" + "\n > Nombre: " + this.nombre + "\n > Clave: " + this.clave + "\n > Puntaje: " + this.puntaje + "\n > Nivel: " + this.nivel;
    }
}
