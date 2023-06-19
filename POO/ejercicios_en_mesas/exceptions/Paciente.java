package ejercicios_en_mesas.exceptions;

import java.time.LocalDate;

public class Paciente {
    String nombre, apellido;
    int dni;
    LocalDate fechaInternacion, fechaAlta = null;

    public Paciente(String nombre, String apellido, int dni, LocalDate fechaInternacion) throws InvalidDateException {
        if (fechaInternacion.isAfter(LocalDate.now())) {
            throw new InvalidDateException("La fecha de internación no puede ser posterior a la fecha actual");
        }

        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaInternacion = fechaInternacion;
    }

    public void darDeAlta(LocalDate fechaAlta) throws InvalidDateException {
        if (fechaAlta.isBefore(fechaInternacion)) {
            throw new InvalidDateException("La fecha de alta no puede ser anterior a la fecha de internación");
        }
        this.fechaAlta = fechaAlta;
    }

}
