package ejercicios_en_mesas.BancoNacional;

public class Main {
    
    public static void main(String[] args) {

        Cliente cliente1 = new Cliente(1, "Perez", 25418348, 20254183481L);
        Cliente cliente2 = new Cliente(2, "Gonzalez", 23456789, 20234567892L);

        Cuenta cajaDeAhorro1 = new CajaDeAhorro(cliente1, 10000, 1.5);
        Cuenta cuentaCorriente1 = new CuentaCorriente(cliente2, 20000, 10000);

        cajaDeAhorro1.depositar(1000);
        cajaDeAhorro1.extraer(500);
        cajaDeAhorro1.extraer(50000);
        if (cajaDeAhorro1 instanceof CajaDeAhorro)
            ((CajaDeAhorro) cajaDeAhorro1).cobrarInteres();
        System.out.println(cajaDeAhorro1.getSaldo());

        cuentaCorriente1.depositar(1000);
        cuentaCorriente1.extraer(500);
        cuentaCorriente1.extraer(50000);
        cuentaCorriente1.depositar(1000);
        cuentaCorriente1.extraer(500);
        cuentaCorriente1.extraer(50000);
        System.out.println(cuentaCorriente1.getSaldo());
        
    }
}
