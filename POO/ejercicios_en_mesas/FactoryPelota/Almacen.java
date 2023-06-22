package ejercicios_en_mesas.FactoryPelota;

import java.util.ArrayList;

public class Almacen {
    private ArrayList<Producto> productos;

    public Almacen() {
        productos = new ArrayList<>();
    }

    public void agregarProducto(Producto producto){
        productos.add(producto);
    }

    public double calcularEspacioNecesario(){
        double espacioNecesario = 0;
        for (Producto producto : productos) {
            espacioNecesario += producto.calcularEspacio();
        }
        return espacioNecesario;
    }
}