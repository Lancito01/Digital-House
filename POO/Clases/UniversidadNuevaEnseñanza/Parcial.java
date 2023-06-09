public class Parcial extends Examen {
    int numeroDeUnidad, numeroDeReintentos;

    public Parcial(Alumno alumno, String titulo, String enunciado, int nota, int numeroDeUnidad,
            int numeroDeReintentos) {
        super(alumno, titulo, enunciado, nota);
        this.numeroDeUnidad = numeroDeUnidad;
        this.numeroDeReintentos = numeroDeReintentos;
    }

    public boolean sePuedeRecuperar() {
        if (this.numeroDeUnidad <= 3 && this.numeroDeReintentos < 3)
            return true;
        else if (this.numeroDeUnidad > 3 && this.numeroDeReintentos < 2)
            return true;
        return false;
    }
}
