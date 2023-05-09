const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
//TODO: Obtener en un nuevo array las edades menores a 18.
//TODO: Obtener en un nuevo array las edades mayor o igual a 18.
//TODO: Obtener en un nuevo array las edades igual a 18.
//TODO: Obtener el menor.
//TODO: Obtener el mayor. 
//TODO: Obtener el promedio de edades.
//TODO: Incrementar en 1 todas las edades.

function array_manipulation(arr){
    let menor_a_dieciocho = []
    let mayor_o_igual_a_dieciocho = []
    let iguales_a_dieciocho = []
    let menor = arr[0]   
    let mayor = arr[0]
    let promedio = 0
    let nuevo_array = []

    //! Menores a 18
    for(const edad of arr){
        if(edad<18){
            menor_a_dieciocho.push(edad)
        }
    }

    //! Mayores o igual a 18
    for(const edad of arr) {
        if(edad>=18){
            mayor_o_igual_a_dieciocho.push(edad)
        }
    }

    //! iguales a 18
    for(const edad of arr) {
        if(edad==18){
            iguales_a_dieciocho.push(edad)
        }
    }

    //! el menor
    for(const edad of arr) {
        menor = edad<menor?edad:menor
    }

    //! el mayor
    for(const edad of arr){
        mayor = edad>mayor?edad:mayor
    }

    //! promedio
    let suma = 0
    for(const edad of arr){
        suma += edad
    }
    promedio = suma/arr.length

    //! incrementar
    for(let i = 0; i<arr.length; i++){
        nuevo_array[i] = arr[i] + 1
    }

    return `
    Menores a 18 = ${menor_a_dieciocho}
    Mayores o iguales a 18 = ${mayor_o_igual_a_dieciocho}
    Iguales a 18 = ${iguales_a_dieciocho}
    Menor = ${menor}
    Mayor = ${mayor}
    Promedio = ${promedio}
    Edades incrementadas = ${nuevo_array}
    `
}
console.log(array_manipulation(edades))

//TODO: Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
//TODO: Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
//TODO: Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
//TODO: Obtener la cuenta con el titular de la misma más joven.
//TODO: Obtener un array con las cuentas habilitadas.
//TODO: Obtener un array con las cuentas deshabilitadas.
//TODO: Obtener la cuenta con el menor saldo.
//TODO: Obtener la cuenta con el mayor saldo.

const arrayCuentas =
[
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 3253.40,
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: true,
        saldo: 3627.12,
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]

function menores(arr){
    let cuentas = []
    for(const cuenta of arr){
        if(cuenta.edadTitular < 30){
            cuentas.push(cuenta)
        }
    }
    return cuentas
}

function mayores_o_iguales(arr){
    let cuentas = []
    for(const cuenta of arr){
        if(cuenta.edadTitular >= 30){
            cuentas.push(cuenta)
        }
    }
    return cuentas
}

function menores_o_iguales(arr){
    let cuentas = []
    for(const cuenta of arr){
        if(cuenta.edadTitular <= 30){
            cuentas.push(cuenta)
        }
    }
    return cuentas
}

function mas_joven(arr){
    let usuario = arr[0]
    for(const cuenta of arr){
        usuario = cuenta.edadTitular < usuario.edadTitular ? cuenta : usuario
    }
    return usuario
}

function habilitadas(arr){
    let cuentas = []
    for(const cuenta of arr){
        if(cuenta.estaHabilitada){
            cuentas.push(cuenta)
        }
    }
    return cuentas
}

function deshabilitadas(arr){
    let cuentas = []
    for(const cuenta of arr){
        if(!cuenta.estaHabilitada){
            cuentas.push(cuenta)
        }
    }
    return cuentas
}

function menor_saldo(arr){
    let usuario = arr[0]
    for(const cuenta of arr){
        usuario = cuenta.saldo < usuario.saldo ? cuenta : usuario
    }
    return usuario
}    

function mayor_saldo(arr){
    let usuario = arr[0]
    for(const cuenta of arr){
        usuario = cuenta.saldo > usuario.saldo ? cuenta : usuario
    }
    return usuario
}
console.log(menores(arrayCuentas))
console.log(mayores_o_iguales(arrayCuentas))
console.log(menores_o_iguales(arrayCuentas))
console.log(mas_joven(arrayCuentas))
console.log(habilitadas(arrayCuentas))
console.log(deshabilitadas(arrayCuentas))
console.log(menor_saldo(arrayCuentas))
console.log(mayor_saldo(arrayCuentas))

//TODO: Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico
//TODO: Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null
//TODO: Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro
//TODO: Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined
//TODO: Reutilizando la función buscarPorId

function generarID(array){
    for (let index = 0; index < array.length; index++) {
        array[index].id = index
    }
    return
}

function buscarPorId(arr, num){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id == num){
            return arr[i]
        }
    }
    return undefined
}

function filtrarPorSaldos(arr, num){
    let cuentas = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].saldo < num){
            cuentas.push(arr[i])
        }
    }
    return cuentas
}

function incrementarSaldo(arr, num, saldo){
    let cuenta = buscarPorId(arr, num)
    if(typeof(cuenta) !== "undefined"){
        cuenta.saldo += saldo
    }else{
        return undefined
    }
    return cuenta
}

generarID(arrayCuentas)
console.log(arrayCuentas)
console.log(buscarPorId(arrayCuentas, 4))
console.log(filtrarPorSaldos(arrayCuentas, 2000))
console.log(incrementarSaldo(arrayCuentas, 5, 8000))