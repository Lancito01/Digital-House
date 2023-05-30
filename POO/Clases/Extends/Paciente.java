package Clases.Extends;

public class Paciente {
    
    int nroDocumento;
    String nombre;
    int edad;
    Medico medico;

    Paciente(int nroDocumento, String nombre, int edad, Medico medico){
        this.nroDocumento = nroDocumento;
        this.nombre = nombre;
        this.edad = edad;
        this.medico = medico;
    }

}
