import java.util.Scanner;

public class clase_3 {
    static int cuantosPaquetes(double cantidadDeComida, Scanner scanner){
        double pesoAcumulado = 0;
        int paquetes = 0;
        while (pesoAcumulado < cantidadDeComida) {
            System.out.println("Ingrese el peso del paquete: ");
            pesoAcumulado += scanner.nextDouble();
            paquetes++;
        }
        return paquetes;
    }
    public static void main(String[] args) {
        
        String nombre;
        double pesoNecesario;
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese el nombre: ");
        nombre = scanner.nextLine();
        System.out.println("Ingrese el peso necesario: ");
        pesoNecesario = scanner.nextDouble();
        scanner.nextLine();
        
        System.out.println("Se necesitan " + cuantosPaquetes(pesoNecesario, scanner) + " paquetes de comida para " + nombre);

        scanner.close();
    }
}