/*Actividad 1*/
SELECT FacturaID AS 'Numero de factura', DATE_FORMAT(FechaFactura, '%d/%m/%Y') AS 'Fecha de Factura', DATE_FORMAT(FechaEnvio, '%d/%m/%Y') AS 'Fecha de Envio', FORMAT(Transporte, 2) AS 'Valor de transporte', CONCAT(direccionEnvio, " ", ciudadEnvio, " ", codigoPostalEnvio, " ", paisEnvio) AS 'Destino'
FROM facturas
;

/*Actividad 2*/
SELECT * FROM correos
LEFT JOIN facturas ON correos.CorreoID = facturas.EnvioVia
;

/*Actividad 3*/
/*No logramos conectar la table Correos con la vista creada, ya que no había ninguna clave foránea que conecte a la vista con la PK de correos. Logramos hacerlo con la tabla facturas.*/

/*Ejercicio 2*/
/*Actividad 1*/
SELECT ProductoID, ProductoNombre, CategoriaNombre, PrecioUnitario FROM productos
INNER JOIN categorias ON categorias.CategoriaID = productos.CategoriaID
;

/*Actividad 2*/
SELECT ProductoNombre, CategoriaNombre FROM vw_productos
INNER JOIN facturadetalle ON facturadetalle.ProductoID = vw_productos.ProductoID
WHERE facturadetalle.ProductoID IS NOT NULL
;

/*Actividad 3*/
/*Creemos haber logrado la consigna porque esta vez si teniamos una forma de relacionar las tablas*/