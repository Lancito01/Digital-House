package ejercicios_en_mesas.clase_3;

import java.util.Scanner;

public class actividad_clase_3_desafio3 {

    public static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese un número entero:");
        int count = scanner.nextInt();
        scanner.close();

        System.out.println("Los primeros " + count + " numeros primos son:");
        int num = 1;
        String result = "";
        while (count != 0) {
            if (isPrime(num++)) {
                result += num - 1 + ", ";
                count--;
            }
        }
        result = result.substring(0, result.length() - 2) + "."; // remove last comma, add period
        System.out.println(result);
    }
}
