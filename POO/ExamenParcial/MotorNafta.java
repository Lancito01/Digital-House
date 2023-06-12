package ExamenParcial;

public class MotorNafta extends Motor implements Comparable {
    boolean tieneEncendidoElectronico;
    String descripcionDelSoftware;
    int numeroDeValvulas;

    public MotorNafta(Mecanico mecanico, int cilindrada, int potencia, String marca, String estado,
            boolean tieneEncendidoElectronico, String descripcionDelSoftware, int numeroDeValvulas) {
        super(mecanico, cilindrada, potencia, marca, estado);
        this.tieneEncendidoElectronico = tieneEncendidoElectronico;
        this.descripcionDelSoftware = descripcionDelSoftware;
        this.numeroDeValvulas = numeroDeValvulas;
    }

    public boolean getTieneEncendidoElectronico() {
        return this.tieneEncendidoElectronico;
    }

    public void setTieneEncendidoElectronico(boolean tieneEncendidoElectronico) {
        this.tieneEncendidoElectronico = tieneEncendidoElectronico;
    }

    public String getDescripcionDelSoftware() {
        return this.descripcionDelSoftware;
    }

    public void setDescripcionDelSoftware(String descripcionDelSoftware) {
        this.descripcionDelSoftware = descripcionDelSoftware;
    }

    public int getNumeroDeValvulas() {
        return this.numeroDeValvulas;
    }

    public void setNumeroDeValvulas(int numeroDeValvulas) {
        this.numeroDeValvulas = numeroDeValvulas;
    }
    
    @Override
    public int compareTo(MotorNafta motor) {
        return this.getPotencia() > motor.getPotencia() ? 1 : this.getPotencia() < motor.getPotencia() ? -1 : 0;
    }
}
