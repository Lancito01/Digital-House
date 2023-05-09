// Primera actividad
function totalAPagar(vehiculo, litrosConsumidos){
    let total = 0


    if(0 <= litrosConsumidos && litrosConsumidos <=25){
        total = total + 50
    }
    else if(litrosConsumidos > 25){
        total = total + 25
    }


    if(vehiculo === "coche"){
        total = total + litrosConsumidos*86
    }
    else if(vehiculo === "moto"){
        total = total + litrosConsumidos*70
    }
    else if(vehiculo === "autobus"){
        total = total + litrosConsumidos*55
    }
    return total
}
console.log(`Total a pagar con "coche" y 14 litros $${totalAPagar("coche", 14)}`)

// Segunda actividad
function tipo_de_sandwich(base, tipo_de_pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let precio_total = 0

    // eleccion base
    if(base === "pollo"){
        precio_total = precio_total + 150
    }
    else if(base === "carne"){
        precio_total = precio_total + 200
    }
    else if(base === "veggie"){
        precio_total = precio_total + 100
    }

    // tipo de pan
    if(tipo_de_pan === "blanco"){
        precio_total = precio_total + 50
    }
    else if(tipo_de_pan === "negro"){
        precio_total = precio_total + 60
    }
    else if(tipo_de_pan === "s/gluten"){
        precio_total = precio_total + 75
    }

    //adicionales
    precio_total = queso == true ? precio_total + 20 : precio_total
    precio_total = tomate == true ? precio_total + 15 : precio_total
    precio_total = lechuga == true ? precio_total + 10 : precio_total
    precio_total = cebolla == true ? precio_total + 15 : precio_total
    precio_total = mayonesa == true ? precio_total + 5 : precio_total
    precio_total = mostaza == true ? precio_total + 5 : precio_total

    return precio_total
}
console.log(`Precio de sandwich con "carne", "negro", queso, lechuca, cebolla, y mostaza $${tipo_de_sandwich("carne", "negro", true, false, true, true, false, true)}`)

// Tercera actividad
function numero_secreto(numero){

    function getRandomInt(max) { // de internet
        return Math.floor(Math.random() * max);
    }

    let secreto = getRandomInt(10)
    secreto = secreto === 0 ? secreto = 10 : secreto
    if(numero === secreto){
        return "Felicidades! Acertaste."
    }
    else{
        return `Lamentablemente no acertaste. El numero correcto era ${secreto}`
    }
}
console.log(numero_secreto(5))

// Cuarta actividad
function abrir_paracaidas(velocidad, altura){

    if(velocidad < 1000 && altura >= 2000 && altura < 3000){
        return true
    }
    return false

    //alternativa
/*     let abrir = false
    abrir = velocidad < 1000 && altura >= 2000 && altura < 3000 ? true : abrir
    return abrir */
}
console.log(`Se abre el paracaidas con 845 km/h y 2164 metros? ${abrir_paracaidas(845, 2164)}.`)