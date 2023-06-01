package ejercicios_en_mesas.BancoNacional;

public class Cliente {

    int numeroDeCliente;
    String apellido;
    int DNI;
    long CUIT;

    Cliente(int numeroDeCliente, String apellido, int DNI, long CUIT) {
        this.numeroDeCliente = numeroDeCliente;
        this.apellido = apellido;
        this.DNI = DNI;
        this.CUIT = CUIT;
    }

}
