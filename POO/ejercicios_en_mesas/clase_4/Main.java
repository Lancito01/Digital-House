package ejercicios_en_mesas.clase_4;

public class Main {

    public static void main(String[] args) {

        UsuarioJuego usuario = new UsuarioJuego("Juan", "1234");
        System.out.println(usuario.toString());

        System.out.println("\nAumentando puntaje en 1, subiendo nivel en 1 y bonus por 5.");
        usuario.aumentarPuntaje();
        usuario.subirNivel();
        usuario.bonus(5);

        System.out.println(usuario.toString());

    }
}