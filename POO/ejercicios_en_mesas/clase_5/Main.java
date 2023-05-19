package ejercicios_en_mesas.clase_5;

public class Main {
    public static void main(String[] args) {

        Perro perro1 = new Perro(true, "Bulldog", 2015, 7.5, true, false, "Firulais");

        System.out.println(perro1.toString());
        System.out.println(String.format("Edad del perro: %d", perro1.edad()));
        System.out.println(String.format("Se puede perder: %b", perro1.sePuedePerder()));
        System.out.println(String.format("Se puede adoptar? %b", perro1.sePuedeAdoptar()));


        Perro perro2 = new Perro(false, "Maltese", 2014, 4.2, false, false, "Pedro");

        System.out.println(perro2.toString());
        System.out.println(String.format("Edad del perro: %d", perro2.edad()));
        System.out.println(String.format("Se puede perder: %b", perro2.sePuedePerder()));
        System.out.println(String.format("Se puede adoptar? %b", perro2.sePuedeAdoptar()));

    }
}
