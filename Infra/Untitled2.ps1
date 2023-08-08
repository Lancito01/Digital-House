$url = "http://ws.smn.gob.ar/map_items/weather"
$localidad = Read-Host "Ingrese la localidad para la cual desea ver el clima"
$response = Invoke-RestMethod -Uri $url -Method Get

#Filtrar por localidad
$climaLocalidad = $response | Where-Object { $_.name -eq $localidad }

if($climaLocalidad) {
    #Muestro info
    Write-Host "Informacion del clima de la localidad $localidad"
    Write-Host "Temperatura: $($climaLocalidad.weather.temp)"
} else {
    Write-Host "Lo siento, no encontramos la localidad $localidad"
}