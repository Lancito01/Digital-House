package ejercicios_en_mesas.FactoryPelota;

public class Main{
    public static void main(String[] args) {
        Almacen almacen = new Almacen();

        Producto pelotaFutbol = Factory.crearProducto(Factory.PELOTAFUTBOL, 0.5, almacen);
        Producto pelotaTenis = Factory.crearProducto(Factory.PELOTATENIS, 0.1, almacen);
        Producto caja10x10 = Factory.crearProducto(Factory.CAJA10X10, 0.2, almacen);

        double espacioNecesario = almacen.calcularEspacioNecesario();

        System.out.println("Pelota de futbol: " + pelotaFutbol.toString());
        System.out.println("Pelota de tenis: " + pelotaTenis.toString());
        System.out.println("Caja de 10x10x10: " + caja10x10.toString());
        System.out.println("Espacio necesario: " + espacioNecesario);
    }
}