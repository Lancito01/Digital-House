package Clases.Colececiones;

import java.util.ArrayList;

public class Equipo {

    String nombre;
    ArrayList<Jugador> jugadores;

    public Equipo(String nombre) {
        this.nombre = nombre;
        jugadores = new ArrayList<>();
    }

    public void addJugador(Jugador jugador) {
        jugadores.add(jugador);
    }
    
    public void mostrarJugadoresTitulares() {
        jugadores.sort((jugador1, jugador2) -> jugador1.nroCamiseta - jugador2.nroCamiseta);
        for (Jugador jugador : jugadores)
            if (jugador.isTitular())
                System.out.println(jugador.toString());
    }
}
