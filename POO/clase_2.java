import java.util.Scanner;

public class clase_2 {
    
    public static String getInitials(String name, String surname) {
        return "" + name.charAt(0) + surname.charAt(0); //! El "" es necesario porque si no, al sumar chars se suma su valor ASCII en vez de las letras en si para convertirlo en un string...........
    }

    public static String getDate(int day, int month, int year) {
        return "" + day + "/" + month + "/" + year;
    }
    
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String name, lastname, initials;

        System.out.println("Ingrese su nombre: ");
        name = scanner.nextLine();
        System.out.println("Ingrese su apellido: ");
        lastname = scanner.nextLine();

        initials = getInitials(name, lastname);
        
        System.out.println("Sus iniciales son: " + initials);
        
        int day, month, year;
        System.out.println("Ingrese el dia: ");
        day = scanner.nextInt();
        System.out.println("Ingrese el mes: ");
        month = scanner.nextInt();
        System.out.println("Ingrese el año: ");
        year = scanner.nextInt();
        
        scanner.close();

        System.out.println("La fecha es: " + getDate(day, month, year) + " (DD/MM/AAAA)");

    }
}
