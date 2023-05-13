package ejercicios_en_mesas.clase_3;

import java.util.Scanner;

public class actividad_clase_3_desafio4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese su nombre:");
        String nombre = scanner.nextLine();
        System.out.println("Ingrese cuántas horas trabajó esta semana:");
        int horasTrabajadas = scanner.nextInt();

        int horasExtras = horasTrabajadas - 40;
        int precioPorHora = 875;

        System.out.println(nombre + " trabajó " + horasTrabajadas + " horas esta semana, por lo que cobra $"
                + ((horasTrabajadas > 40 ? 40 : horasTrabajadas) * precioPorHora + horasExtras * precioPorHora * 1.5)
                + ".");

        scanner.close();
    }
}
