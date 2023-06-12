package ExamenParcial;

public class Main {
    public static void main(String[] args) {
        // probar clases y sus metodos para ver si funcionan
        Mecanico mecanico1 = new Mecanico("Juan", "Perez", "1234");
        Mecanico mecanico2 = new Mecanico("Pedro", "Gomez", "5678");
        MotorNafta motor1 = new MotorNafta(mecanico1, 2000, 250, "Ford", "NUEVO", true, "V1.0", 16);
        MotorNafta motor2 = new MotorNafta(mecanico2, 2000, 200, "Ford", "GASTADO", true, "V1.0", 16);
        MotorDiesel motor3 = new MotorDiesel(mecanico1, 2000, 150, "Ford", "NUEVO", true);
        MotorDiesel motor4 = new MotorDiesel(mecanico2, 2000, 200, "Ford", "GASTADO", true);
        System.out.println(motor1.sePuedeReparar());
        System.out.println(motor2.sePuedeReparar());
        System.out.println(motor3.sePuedeReparar());
        System.out.println(motor4.sePuedeReparar());
        System.out.println(motor1.compareTo(motor2));
        // System.out.println(motor3.compareTo(motor4)); // no se puede comparar porque no implementa la interfaz comparable
        
    }
}
