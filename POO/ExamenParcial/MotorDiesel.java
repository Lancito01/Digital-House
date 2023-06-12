package ExamenParcial;

public class MotorDiesel extends Motor {
    boolean turbo;

    public MotorDiesel(Mecanico mecanico, int cilindrada, int potencia, String marca, String estado, boolean turbo) {
        super(mecanico, cilindrada, potencia, marca, estado);
        this.turbo = turbo;
    }

    public void setTurbo(boolean turbo) {
        this.turbo = turbo;
    }

    public boolean getTurbo() {
        return this.turbo;
    }
}
