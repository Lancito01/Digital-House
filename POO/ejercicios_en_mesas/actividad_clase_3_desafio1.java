package ejercicios_en_mesas;

import java.util.Scanner;

public class actividad_clase_3 {

    public static int convertChoiceToInt(String choice) {
        switch (choice.toLowerCase()) {
            case "piedra":
                return 1;
            case "papel":
                return 2;
            case "tijera":
                return 3;
            default:
                return 0;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String nombreJugador1, nombreJugador2;
        System.out.println("Nombre del primer jugador:");
        nombreJugador1 = scanner.nextLine();
        System.out.println("Nombre del segundo jugador:");
        nombreJugador2 = scanner.nextLine();
        System.out.println("\nPara terminar el juego, el jugador 1 debe ingresar un asterisco (*).\n");

        String eleccion1 = "", eleccion2;
        int choice1 = 0, choice2 = 0, puntosJugador1 = 0, puntosJugador2 = 0;
        while (true) {
            System.out.println("\tJugador 1:\n\tPiedra, papel o tijera?");
            eleccion1 = scanner.nextLine();
            if (eleccion1.equals("*"))
                break;

            System.out.println("\nJugador 2:\n\tPiedra, papel o tijera?");
            eleccion2 = scanner.nextLine();

            // convert choice to int
            choice1 = convertChoiceToInt(eleccion1);
            choice2 = convertChoiceToInt(eleccion2);
            if(choice1 == 0 || choice2 == 0) { // invalid choice
                System.out.println("\nAlguna de las elecciones fue inválida, por favor vuelva a intentarlo.\n");
                continue;
            }

            // compare choices
            if (choice1 == choice2) {
                System.out.println("Empate");
            } else if (choice1 == 1 && choice2 == 2) {
                System.out.println("Gana " + nombreJugador2);
                puntosJugador2++;
            } else if (choice1 == 1 && choice2 == 3) {
                System.out.println("Gana " + nombreJugador1);
                puntosJugador1++;
            } else if (choice1 == 2 && choice2 == 1) {
                System.out.println("Gana " + nombreJugador1);
                puntosJugador1++;
            } else if (choice1 == 2 && choice2 == 3) {
                System.out.println("Gana " + nombreJugador2);
                puntosJugador2++;
            } else if (choice1 == 3 && choice2 == 1) {
                System.out.println("Gana " + nombreJugador2);
                puntosJugador2++;
            } else if (choice1 == 3 && choice2 == 2) {
                System.out.println("Gana " + nombreJugador1);
                puntosJugador1++;
            }

        }
        System.out.println("Puntos de " + nombreJugador1 + ": " + puntosJugador1);
        System.out.println("Puntos de " + nombreJugador2 + ": " + puntosJugador2);
        System.out.println("Ganador: " + (puntosJugador1 > puntosJugador2 ? nombreJugador1 : nombreJugador2));
        scanner.close();
    }
}
