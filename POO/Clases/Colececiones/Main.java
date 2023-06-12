package Clases.Colececiones;

public class Main {
    public static void main(String[] args) {

        Jugador jugador1 = new Jugador("Sergio", 51);
        Jugador jugador2 = new Jugador("Juan", 41);
        Jugador jugador3 = new Jugador("Carlos", 3);

        Equipo equipo = new Equipo("Boca");

        equipo.addJugador(jugador1);
        equipo.addJugador(jugador2);
        equipo.addJugador(jugador3);

        jugador1.setTitular(true);
        jugador2.setTitular(true);

        equipo.mostrarJugadoresTitulares();

    }
}
