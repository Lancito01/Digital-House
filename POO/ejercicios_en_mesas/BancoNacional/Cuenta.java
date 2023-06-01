package ejercicios_en_mesas.BancoNacional;

public abstract class Cuenta {

    Cliente cliente;
    double saldo;

    Cuenta(Cliente cliente, double saldo) {
        this.cliente = cliente;
        this.saldo = saldo;
    }

    public abstract void depositar(int monto);

    public abstract void extraer(int monto);

    public abstract double getSaldo();

}
