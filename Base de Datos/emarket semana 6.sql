/*Clientes*/
/*Actividad 1*/
SELECT 
	ClienteID,
    Contacto,
    CASE
		WHEN Fax = "" THEN CONCAT("TEL: ", Telefono)
        ELSE Fax
	END AS Numero
FROM clientes;

/*Actividad 2.a*/
SELECT Telefono 
From clientes
WHERE Fax = "";

/*Actividad 2.b*/
SELECT Numero
From vw_clientes;

/*Proveedores*/
/*Actividad 1*/
SELECT
	ProveedorID AS id,
    Contacto,
    Compania,
    CONCAT(Direccion, " ", Ciudad, " ", CodigoPostal, " ", Pais) AS Direccion
FROM proveedores;

/*Actividad 2.a*/
SELECT
	*
FROM proveedores
WHERE Direccion LIKE "%Americanas%" AND Pais LIKE "Brazil"
;

/*Actividad 2.b*/
SELECT *
FROM vw_proveedores
WHERE Direccion LIKE "%Americanas%Brazil%"
;
