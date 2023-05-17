package Clases;

public class Main {

    public static void main(String[] args) {

        Cliente cliente1 = new Cliente(1, "Juan");
        System.out.println(cliente1);
        cliente1.incrementarDeuda(1000.0);
        System.out.println("Deuda: " + cliente1.getDeuda());
        cliente1.pagarDeuda(500.0);
        System.out.println("Deuda: " + cliente1.getDeuda());
        
    }
}
