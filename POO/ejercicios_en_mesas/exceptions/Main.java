package ejercicios_en_mesas.exceptions;

import java.time.LocalDate;

public class Main{
    public static void main(String[] args){

        try {
            Paciente p1 = new Paciente("Juan", "Perez", 12345678, LocalDate.of(2021, 8, 1));
            p1.darDeAlta(LocalDate.of(2021, 9, 30));
        } catch (InvalidDateException e) {
            System.out.println(e);
        }

        try {
            Paciente p2 = new Paciente("Maria", "Rodriguez", 12345679, LocalDate.of(2021, 8, 1));
            p2.darDeAlta(LocalDate.of(2021, 10, 2));
        } catch (InvalidDateException e) {
            System.out.println(e);
        }

    }
}