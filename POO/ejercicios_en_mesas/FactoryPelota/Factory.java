package ejercicios_en_mesas.FactoryPelota;

public class Factory {
    public static final String CAJA10X10 = "caja10x10";
    public static final String PELOTAFUTBOL = "pelotaFutbol";
    public static final String PELOTATENIS = "pelotaTenis";

    public static Producto crearProducto(String codigo, double peso, Almacen almacen) {
        Producto producto;
        switch (codigo) {
            case CAJA10X10:
                producto = new Caja(peso, 10, 10, 10);
                break;
            case PELOTAFUTBOL:
                producto = new Pelota(peso, 11);
                break;
            case PELOTATENIS:
                producto = new Pelota(peso, 0.32);
                break;
            default:
                producto = null;
                break;
        }
        if (producto != null) {
            almacen.agregarProducto(producto);
        }
        return producto;
    }
}
