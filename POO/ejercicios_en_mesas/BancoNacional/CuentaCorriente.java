package ejercicios_en_mesas.BancoNacional;

public class CuentaCorriente extends Cuenta {

    double montoDescubierto;

    CuentaCorriente(Cliente cliente, double saldo, double montoDescubierto) {
        super(cliente, saldo);
        this.montoDescubierto = montoDescubierto;
    }

    @Override
    public void depositar(int monto) {
        saldo += monto;
    }

    @Override
    public void extraer(int monto) {
        if (saldo > monto)
            saldo -= monto;
        else if (saldo + montoDescubierto > monto){
            saldo = 0;
            montoDescubierto -= monto - saldo;
        }
        else
            System.out.println("No hay saldo suficiente");
    }

    @Override
    public double getSaldo() {
        return saldo;
    }

}
