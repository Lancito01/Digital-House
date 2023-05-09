//! Actividad 1
let mat = [
    [5, 8, 1, 2, 7],
    [6, 9, 3, 4, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]
function sumar_numeros_de_matriz(matriz) {
    let suma = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j]
        }
    }
    return suma
}
console.log(sumar_numeros_de_matriz(mat))

//! Actividad 2
function generar_matriz_10x10() { 
    let matriz = [];
    let numero = 1;
    for(let i=0; i<10; i++){
        let fila = [];
        for(let j=0; j<10; j++){
            fila.push(numero);
            numero++;
        }
        matriz.push(fila);
    }
    return matriz
}
console.table(generar_matriz_10x10())

//! Actividad 3
function sumar_diagonal(matriz) {
    let suma = 0
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i]
    }
    return suma
}
console.log(sumar_diagonal(generar_matriz_10x10()))

function sumar_diagonal_2(matriz) {
    let suma = 0
    for (let i = 0, j = matriz.length - 1; i < matriz.length; i++, j--) {
        suma += matriz[i][j]
    }
    return suma
}
console.log(sumar_diagonal_2(generar_matriz_10x10()))