console.log("===========================================================================================================================================================")

/* 
========================
Arrays y colecciones
========================
*/
let arr = ["primer", "segundo", "tercero"]
console.log(arr)
// A
console.log(arr[2])
// B
for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i]+"!"
}
console.log(arr)
// C
arr.push("cuarto")
console.log(arr)
// D
console.log(arr.pop())
console.log(arr)
// E
let arr2 = ["first", "second", "third"]
if(arr[0] === arr2[0]){
    console.log("Son iguales")
}
else{
    console.log("no son iguales")
}

/* 
========================
¿Qué devuelven estos códigos?
========================
*/
// 1: undefined
// 2: "Ironman"
// 3: “un string cualquiera”

/*
========================
Colecciones de películas (y más...)
========================
*/
// 1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(peliculas[2])
// 2
for(let i = 0;i < peliculas.length;i++){
    peliculas[i] = peliculas[i].toUpperCase()
}
console.log(peliculas)
// 3
let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
function sumar_arrays(array1, array2){
    let array3 = []
    for(let i = 0;i < array1.length;i++){
        array3.push(array1[i])
    }
    for(let i = 0;i < array2.length;i++){
        array3.push(array2[i])
    }
    return array3
}
array3 = sumar_arrays(peliculas, peliculas2)
console.log(array3)
// 4
function eliminar_ultimo_elemento(arr){
    let elemento = arr.pop()
    return elemento
}
let elemento_eliminado = eliminar_ultimo_elemento(array3)
console.log(array3)
// 5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]
function comparar_calificaciones(arr1, arr2){
    let resultados = []
    for(let i = 0; i < 10;i++){
        resultados[i] = arr1[i] === arr2[i]/* ?true:false */
    }
    return resultados
}
let calificaciones_comparadas = comparar_calificaciones(asiaScores, euroScores)
console.log(calificaciones_comparadas)

// Bonus
// 1
let arrNuevo = ["elemento1", "elemento2", "elemento3", "elemento4"]
function imprimirInverso(arr){
    for(let i = arr.length-1 ; i>=0 ; i--){
        console.log(arr[i])
    }
}

imprimirInverso(arrNuevo)

function inversor(arr){
    let arrayInvertido = []
    for(let i = 0; i < arr.length ; i++ ){
        arrayInvertido.push( arr.pop() )
    }
    return arrayInvertido
}

// 2
function sumaArray(arr){
    let suma = 0
    for(let i = 0;i<arr.length;i++){
        suma += arr[i]
    }
    return suma
}
console.log(sumaArray([-5,100, 19]))

// 3
function join(arr){
    let str = ""
    for(let i = 0; i<arr.length;i++){
        str = str + arr[i]
    }
    return str
}
console.log(join(["h", "o", "l", "a"]))
