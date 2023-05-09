/* 
Dejo algunos ejercicios extras de array bidimensional
Cualquier consulta me etiquetan 🧉
*/

let matriz = [
    [14, 11, 15],   // indices --> 0
    [24, 34, 22],  // indices --> 1
    [33, 30, 21]  // indices --> 2
]


/* 
1 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos pares
*/
function even_numbers_in_square_array(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 === 0) {
                result.push(arr[i][j]);
            }
        }
    }
    return result
}
console.log(even_numbers_in_square_array(matriz));


/* 
2 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos impares
*/
function odd_numbers_in_square_array(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 !== 0) {
                result.push(arr[i][j]);
            }
        }
    }
    return result
}
console.log(odd_numbers_in_square_array(matriz));


/* 
3 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos mayor a 20
*/
function numbers_over_20_in_square_array(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > 20) {
                result.push(arr[i][j]);
            }
        }
    }
    return result
}
console.log(numbers_over_20_in_square_array(matriz));


/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/
function diagonal_elements(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][i])
    }
    return result
}
console.log(diagonal_elements(matriz));

