//! Ejercicio 1
//TODO: Realizar una función llamada restarPares que reciba por parámetro dos valores numéricos. 
//TODO: Si ambos números recibidos son pares entonces se deberá retornar el resultado de restarle al primer parámetro el segundo. 
//TODO: Si alguno o los dos no son pares , se deberá retornar un string que diga “Lo siento, uno o mas parámetros no cumple con la condición de ser un número par”
function restarPares(num1, num2){
    if(num1%2==0 && num2%2==0){
        return num1-num2
    }
    return "Lo siento, uno o mas parámetros no cumple con la condición de ser un número par"
}

//! Ejercicio 2
//TODO: Debemos poder controlar el acceso a un recital de música para una determinada persona. Para eso, debemos realizar una función  que reciba dos parámetros
//TODO: La edad de la persona, Number
//TODO: Si tiene o no, el ticket de entrada , booleano
//TODO: La función deberá evaluar las siguientes condiciones y retornar en cada caso lo que se pida:
//TODO: Si tiene entrada y es mayor o igual de 18 años: retorna un valor booleano true.
//TODO: Si tiene entrada pero es menor de 18 años: retorna un string que diga “Sólo puedes acceder con un adulto acompañante”.
//TODO: Si no tiene entrada: retorna un booleano false.
function recital(age, has_ticket){
    if(age>=18 && has_ticket){
        return true
    }
    else if(has_ticket){
        return "Sólo puedes accedes con un adulto acompañante"
    }
    else{
        return false
    }
}

//! Ejercicio 3
//TODO: Dado el siguiente arreglo de objetos:
let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },   
]
//TODO: Realizar una función que reciba un array como parámetro, y lo recorra para filtrar los productos que sean de tipo “tecnologia” y que su precio sea mayor o igual a 50000, la función deberá retornar un nuevo arreglo con los productos que cumplan con las condiciones antes mencionadas.

function filtrar(arr){
    let resultado = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].tipo == "tecnologia" && arr[i].precio >= 50000){
            resultado.push(arr[i])
        }
    }
    return resultado
}

//? Probar todas las respuestas:
console.log(restarPares(8, 2)) //*
console.log(recital(15, true)) //*
console.log(filtrar(productos)) //*