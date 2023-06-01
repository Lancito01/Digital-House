package ejercicios_en_mesas.BancoNacional;

public class CajaDeAhorro extends Cuenta {

    double tasaDeInteres;

    CajaDeAhorro(Cliente cliente, double saldo, double tasaDeInteres) {

        super(cliente, saldo);
        this.tasaDeInteres = tasaDeInteres;
    }

    @Override
    public void depositar(int monto) {
        saldo += monto;
    }

    @Override
    public void extraer(int monto) {
        if (saldo >= monto)
            saldo -= monto;
        else
            System.out.println(String.format("No hay saldo suficiente para extraer %d", monto));
    }

    @Override
    public double getSaldo() {
        return saldo;
    }

    public void cobrarInteres() {
        saldo += saldo * tasaDeInteres / 100;
    }

}
