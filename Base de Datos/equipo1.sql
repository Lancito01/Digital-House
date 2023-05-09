/*Actividad 1*/
SELECT nombre_titular, numero, entidad_financiera.nombre, hoteles.nombre, hotelesxreserva.checkin FROM tarjeta
INNER JOIN entidad_financiera ON tarjeta.identidad = entidad_financiera.identidad
INNER JOIN pagos ON pagos.idtarjeta = tarjeta.idtarjeta
INNER JOIN reservas ON reservas.idpago = pagos.idpago
INNER JOIN hotelesxreserva ON hotelesxreserva.idreserva = reservas.idreserva
INNER JOIN hoteles ON hoteles.idhotel = hotelesxreserva.idHotel
WHERE hoteles.ciudad = "Napoles"
;

/*Actividad 2*/
SELECT idpago, cantidadcuotas, tarjeta.numero, entidad_financiera.nombre, paises.nombre FROM pagos
INNER JOIN tarjeta ON pagos.idtarjeta = tarjeta.idtarjeta
INNER JOIN entidad_financiera ON tarjeta.identidad = entidad_financiera.identidad
INNER JOIN paises ON paises.idpais = entidad_financiera.idpais
WHERE pagos.precioTotal < 1501 AND paises.idpais = entidad_financiera.idpais
;

/*Actividad 3*/
SELECT entidad_financiera.nombre, count(idpago) AS totalCantidad
FROM entidad_financiera INNER JOIN tarjeta ON entidad_financiera.identidad = tarjeta.identidad
INNER JOIN pagos ON tarjeta.idtarjeta = pagos.idtarjeta
GROUP BY entidad_financiera.nombre
;

/*Actividad 4*/
SELECT clientes.nombres, clientes.apellidos, paises.nombre, metodospago.nombre
FROM clientes INNER JOIN paises ON clientes.idPais = paises.idpais
INNER JOIN reservas ON clientes.idCliente = reservas.idCliente
INNER JOIN pagos ON reservas.idPago = pagos.idPago
INNER JOIN metodospago ON pagos.idMetodosPago = metodospago.idmetodospago
WHERE pagos.idMetodosPago = 3
;

/*Actividad 5*/
SELECT entidad_financiera.nombre, tarjeta.numero, tarjeta.nombre_titular, hoteles.nombre, hoteles.ciudad FROM hotelesxreserva
INNER JOIN reservas ON hotelesxreserva.idReserva = reservas.idreserva
INNER JOIN pagos ON reservas.idPago = pagos.idpago
INNER JOIN metodospago ON pagos.idmetodospago = metodospago.idmetodospago
INNER JOIN tarjeta ON pagos.idtarjeta = tarjeta.idtarjeta
INNER JOIN entidad_financiera ON tarjeta.identidad = entidad_financiera.identidad
INNER JOIN hoteles ON hoteles.idhotel = hotelesxreserva.idhotel
WHERE entidad_financiera.nombre = 'BANCO DE LA PROVINCIA DE BUENOS AIRES' AND metodospago.nombre = "Tarjeta de Crédito"
;

/*Actividad 6*/
SELECT nombres, apellidos, numeroPasaporte, ciudad, paises.nombre FROM clientes
INNER JOIN paises ON paises.idpais = clientes.idpais
WHERE paises.nombre = "Perú"
;

/*Actividad 7*/
SELECT metodospago.nombre, clientes.nombres, clientes.apellidos, count(reservas.idreserva) as cantidad
FROM clientes INNER JOIN reservas ON clientes.idcliente = reservas.idCliente
INNER JOIN pagos ON reservas.idPago = pagos.idpago
INNER JOIN metodospago ON pagos.idMetodosPago = metodospago.idmetodospago
GROUP BY metodospago.nombre, clientes.nombres, clientes.apellidos
;

/*Actividad 8*/
SELECT paises.nombre AS pais, count(clientes.idcliente) AS clientesXPais
FROM clientes
INNER JOIN paises ON clientes.idPais = paises.idpais
GROUP BY paises.nombre
;

/*Actividad 9*/
SELECT nombres, apellidos, numeroPasaporte, tarjeta.vencimiento FROM clientes
INNER JOIN reservas ON reservas.idcliente = clientes.idcliente
INNER JOIN pagos ON reservas.idpago = pagos.idpago
INNER JOIN metodospago ON metodospago.idmetodospago = pagos.idMetodosPago
INNER JOIN tarjeta ON tarjeta.idtarjeta = pagos.idtarjeta
WHERE metodospago.nombre = "Tarjeta de Crédito" AND clientes.ciudad = "Medellín" AND YEAR(tarjeta.vencimiento) >= 2029
;

/*Actividad 10*/
SELECT metodospago.nombre, SUM(pagos.precioTotal) AS sumaTotal FROM metodospago
INNER JOIN pagos ON pagos.idMetodosPago = metodospago.idmetodospago
GROUP BY metodospago.nombre
;

/*Actividad 11*/
SELECT SUM(pagos.precioTotal) AS "TOTAL MENDOZA" from pagos
INNER JOIN reservas ON reservas.idpago = pagos.idpago
INNER JOIN sucursales ON sucursales.idSucursal = reservas.idSucursal
WHERE sucursales.ciudad LIKE "Mendoza"
ORDER BY sucursales.ciudad
;

/*Actividad 12*/
SELECT clientes.idcliente, clientes.nombres, clientes.apellidos, clientes.direccion, clientes.ciudad, clientes.telefono, clientes.idPais
FROM clientes LEFT JOIN reservas ON clientes.idcliente = reservas.idCliente
WHERE idreserva IS NULL
;

/*Actividad 13*/
SELECT vuelos.idvuelo, reservas.idreserva, vuelos.fechaLlegada, vuelos.fechaPartida, reservas.fechaRegistro AS fechaDeReserva FROM vuelos
INNER JOIN vuelosxreserva ON vuelos.idvuelo = vuelosxreserva.idVuelo
INNER JOIN reservas ON vuelosxreserva.idVuelo = reservas.idreserva
WHERE origen = "CHILE" AND destino = "ECUADOR"
;

/*Actividad 14*/
SELECT hoteles.nombre, cantidadHabitaciones FROM hoteles
INNER JOIN paises ON paises.idpais = hoteles.idPais
WHERE paises.nombre LIKE "Argentina"
;

/*Actividad 15*/
SELECT hoteles.nombre, COUNT(reservas.idReserva) AS cantidadReservas
FROM hoteles
INNER JOIN hotelesxreserva ON hoteles.idhotel = hotelesxreserva.idHotel
INNER JOIN reservas ON reservas.idreserva = hotelesxreserva.idReserva 
GROUP BY hoteles.nombre
ORDER BY COUNT(reservas.idReserva) DESC
LIMIT 10
;

/*Actividad 16*/
SELECT clientes.nombres, clientes.apellidos, metodospago.nombre FROM clientes
INNER JOIN reservas ON reservas.idCliente = clientes.idcliente
INNER JOIN pagos ON reservas.idPago = pagos.idpago
INNER JOIN metodospago ON metodospago.idmetodospago = pagos.idMetodosPago
ORDER BY clientes.apellidos ASC
;

/*Actividad 17*/
SELECT vuelos.origen, count(vuelosxreserva.idReserva)
FROM vuelos
INNER JOIN vuelosxreserva ON vuelos.idvuelo = vuelosxreserva.idVuelo
WHERE (origen = "ARGENTINA" OR origen = "COLOMBIA") AND hour(fechaPartida) = 18 
GROUP BY vuelos.origen
;

/* Actividad 18 */
SELECT paises.nombre, sucursales.idSucursal, SUM(pagos.precioTotal) as totalVentas
FROM sucursales INNER JOIN paises ON sucursales.idPais = paises.idpais
INNER JOIN reservas ON sucursales.idSucursal = reservas.idSucursal
INNER JOIN pagos ON reservas.idPago = pagos.idpago
GROUP BY paises.nombre, sucursales.idSucursal
ORDER BY totalVentas DESC
;

/* Actividad 19 */
SELECT paises.nombre
FROM paises LEFT JOIN clientes ON paises.idpais = clientes.idPais
WHERE idcliente IS NULL
ORDER BY paises.nombre DESC
;

/*Actividad 20*/
SELECT hoteles.nombre FROM hoteles
INNER JOIN hotelesxreserva ON hoteles.idhotel = hotelesxreserva.idHotel
INNER JOIN reservas ON hotelesxreserva.idReserva = reservas.idreserva
GROUP BY hoteles.nombre
HAVING SUM(reservas.idreserva) > 2
;