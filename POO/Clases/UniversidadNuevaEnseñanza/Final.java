public class Final extends Examen implements Comparable {
    int notaDeOral;
    String descripcion;

    public Final(Alumno alumno, String titulo, String enunciado, int nota, int notaDeOral, String descripcion) {
        super(alumno, titulo, enunciado, nota);
        this.notaDeOral = notaDeOral;
        this.descripcion = descripcion;
    }

    @Override
    public boolean compareTo(Final t) {
        if (this.nota > t.nota && this.notaDeOral > t.notaDeOral)
            return true;
        return false;
    }
}