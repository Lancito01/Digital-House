package ExamenParcial;

public abstract class Motor {
    Mecanico mecanico;
    int cilindrada, potencia;
    String marca, estado;

    public Motor(Mecanico mecanico, int cilindrada, int potencia, String marca, String estado) {
        this.mecanico = mecanico;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.marca = marca;
        this.estado = estado;
    }

    public Mecanico getMecanico() {
        return this.mecanico;
    }

    public void setMecanico(Mecanico mecanico) {
        this.mecanico = mecanico;
    }

    public int getCilindrada() {
        return this.cilindrada;
    }

    public void setCilindrada(int cilindrada) {
        this.cilindrada = cilindrada;
    }

    public int getPotencia() {
        return this.potencia;
    }

    public void setPotencia(int potencia) {
        this.potencia = potencia;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getEstado() {
        return this.estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public boolean sePuedeReparar() {
        return getEstado() != "GASTADO" && getPotencia() > 200;
    }
}
