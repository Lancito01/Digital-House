// TODO: Crear una funcion que reciba dos numeros, los multiplique y retorne lo siguiente: Si el resultado es par, "es par", si es impar, "es impar"
function is_multiplication_even(num1, num2){
    return (num1*num2)%2==0?"Es par":"Es impar" //* Se puede hacer en una sola linea con esto
}
console.log(is_multiplication_even(1,3))

// TODO: encontrar el menor numero de un arreglo (de numeros?)
function lower_number_in_arr(arr){
    let lowest = arr[0]
    let index = 0
    for(let i = 0; i<arr.length;i++){
        index = arr[i]<lowest?i:index
        lowest = arr[i]<lowest?arr[i]:lowest
    }
    return `${lowest} ${index}`
}
console.log(lower_number_in_arr([0, 8, 12, -1, 7, 5]))

// TODO: completa el siguiente objeto con el metodo promediar, el mismo debera calcular el promedio en base a la propiedad NOTAS
let estudiante = {
    nombre: "Carmen",
    notas: [8, 6, 10],
    edad: 20,
};

estudiante.promediar = function(){
    let sum = 0
    for(const value of this.notas){
        sum += value
    }
    return sum/this.notas.length
}

// TODO: Encontrar el primer elemento que cumpla con la condicion de haber ganado un ticket y que ademas sea mayor de edad (18 o mas). Deberas retornar dicho elemento
let participantes = [
    {
        nombre: "Florencia",
        edad: 22,
        ganoTicket: false,
    },
    {
        nombre: "Juan Pablo",
        edad: 17,
        ganoTicket: true,
    },
    {
        nombre: "Fernando",
        edad: 31,
        ganoTicket: false,
    },
    {
        nombre: "Guillermina",
        edad: 27,
        ganoTicket: true,
    },
    {
        nombre: "Gabriel",
        edad: 32,
        ganoTicket: true,
    },
];

function who_won_and_is_over_age(arr){
    let arr_with_winners = []
    for(const player of arr){
        if(player.edad > 17 && player.ganoTicket){
            arr_with_winners.push(player)
        }
    }
    return arr_with_winners
}
console.log(who_won_and_is_over_age(participantes))

// TODO: Dado el siguiente arreglo de socios de una empresa se nos solicita filtrar a aquellos que tengan un total de 1500 acciones o mas, pero ademas, ser parte de la empresa desde antes de este año (los del 2023 no cuentan) Devolver un arreglo con dichos socios
let socios = [
    {
        nombreComp1eto: "Joel Perez",
        añoDeEntrada: 2018,
        cantidadAcciones: 3200,
    },
    {
        nombrecompleto: "Juan Lopez",
        añoDeEntrada: 2022,
        cantidadAcciones: 4100,
    }
]
function filter_associates(arr){
    let arr_with_associates = []
    for(const associate of arr){
        if(associate.cantidadAcciones >= 1500 && associate.añoDeEntrada < 2023){
            arr_with_associates.push(associate)
        }
    }
    return arr_with_associates
}
