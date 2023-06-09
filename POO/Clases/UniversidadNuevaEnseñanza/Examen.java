public class Examen {
    Alumno alumno;
    String titulo, enunciado;
    int nota;

    public Examen(Alumno alumno, String titulo, String enunciado, int nota) {
        this.alumno = alumno;
        this.titulo = titulo;
        this.enunciado = enunciado;
        this.nota = nota;
    }

    public boolean estaAprobado(int nota) {
        return nota >= 4 ? true : false;
    }    
}
