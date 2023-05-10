import java.util.Scanner;

public class actividad_clase_2 {

    public static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        for (int i = 2; i <= number/2 + 1; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static int getMaxNumber(int num1, int num2, int num3){
        int max = num1;
        if (num2 > max) {
            max = num2;
        }
        if (num3 > max) {
            max = num3;
        }
        return max;
    }

    public static boolean areStringsEqual(String unTextoA, String unTextoB){
        return unTextoA.equals(unTextoB);
        // return unTextoA == unTextoB
    }

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int number;
        System.out.println("Ingrese un numero: ");
        number = scanner.nextInt();
        if (isPrime(number)) {
            System.out.println("El numero es primo");
        } else {
            System.out.println("El numero no es primo");
        }
        scanner.nextLine();
        
        int num1, num2, num3;
        System.out.println("Ingrese el primer numero: ");
        num1 = scanner.nextInt();
        System.out.println("Ingrese el segundo numero: ");
        num2 = scanner.nextInt();
        System.out.println("Ingrese el tercer numero: ");
        num3 = scanner.nextInt();
        System.out.println("El numero mas grande es: " + getMaxNumber(num1, num2, num3));
        scanner.nextLine();
        
        String stringA, stringB;
        System.out.println("Ingrese el primer texto: ");
        stringA = scanner.nextLine();
        System.out.println("Ingrese el segundo texto: ");
        stringB = scanner.nextLine();
        if (areStringsEqual(stringA, stringB)) {
            System.out.println("Los textos son iguales");
        } else {
            System.out.println("Los textos son distintos");
        }

        scanner.close();
    }
}
