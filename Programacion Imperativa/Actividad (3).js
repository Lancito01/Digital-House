// Actividad 1
//

// Actividad 2
function hello_user(name){
    console.log(`Hola ${name}!`)
}
hello_user("Pedro")

// Actividad 3
function sum(num1, num2){
    console.log(`La suma es igual a ${num1 + num2}`)
}

// Actividad 4
function how_old(yob){
    console.log(`En 2019, el usuario tenía ${2019 - yob}.`)
}

// Actividad 5
function numero_secreto(numero){

    function getRandomInt(max) { // de internet
        return Math.floor(Math.random() * max);
    }

    let secreto = getRandomInt(10)
    secreto = secreto === 0 ? secreto = 10 : secreto
    if(numero === secreto){
        return "Felicidades, ese era!"
    }
    else{
        return /*`Lamentablemente no acertaste. El numero correcto era ${secreto}`*/ "Lo siento, intenta nuevamente."
    }
}

// Actividad 6
function pares_hasta_el_cien(){
    for(let i = 0; i < 101; i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
pares_hasta_el_cien()

// Actividad 7
function contar_cifras(number){
    if(number < 10){ // tiene una cifra
        console.log(`Para ser un numero de 2 cifras, le faltan ${10 - number}`)
    }
    else if(number < 100){ // tiene 2
        console.log(`Para ser un numero de 3 cifras, le faltan ${100 - number}`)
    }
}
contar_cifras(8)

// Actividad 8
function promedio(num1, num2, num3){
    console.log(`${(num1+num2+num3)/3}`)
}
promedio(7, 7, 8)

// Actividad 9
function sumatoria(num){

    if (num % 1 != 0 && num > 0){ // evaluar si es un numero natural y positivo
        return
    }

    let sumatoria = 0
    for(let i = 1; i <= num; i++){
        sumatoria += i // sumatoria = sumatoria + i
    }
    console.log(sumatoria)

}
sumatoria(120)