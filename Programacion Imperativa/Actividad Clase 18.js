//! escribir una funcion que genera una matriz de 4 filas y 7 columnas con numeros aleatorios del 1 al 100
function generar_matriz(){
    let matriz = [];
    for(let i = 0; i < 4; i++){
        matriz[i] = [];
        for(let j = 0; j < 7; j++){
            matriz[i][j] = Math.floor(Math.random() * 100);
        }
    }
    return matriz;
}
let matriz = generar_matriz();
console.table(matriz);
/*
!================================ Generar Matriz para testear las funciones ================================
? Es una matriz de 4 filas y 7 columnas con numeros aleatorios del 1 al 100
? De acá para abajo son los ejercicios
*/

//! Actividad 1
// TODO: devolver los gastos de una semana dada por el usuario
function sumar_gastos_por_semana(matriz, semana){ // entra el mes entero
    let gastos = 0;
    for(let i = 0; i < matriz.length; i++){ // entra a la semana
        if(i == semana-1){
            for(let j = 0; j < matriz[i].length; j++){ // entra a cada dia
                gastos += matriz[i][j]
            }
        }
    }
    return gastos;
}
console.log(sumar_gastos_por_semana(matriz, 4))

//! Actividad 2
// TODO: devolver los gastos de un dia del mes
function gasto_de_un_dia(matriz, dia){
    let contador = 1
    for(let i = 0; i < matriz.length; i++){// entrar a las semanas
        for(let j = 0; j < matriz[i].length; j++){ // entrar a cada dia
            if(contador == dia){
                return matriz[i][j];
            }
            else{
                contador++
            }
        }
    }
}
console.log(gasto_de_un_dia(matriz, 9))

//! Actividad 3
// TODO: sumar los gastos de todo el mes
function sumar_gastos(matriz){
    let gastos = 0;
    for(let i = 0; i < matriz.length; i++){ // entro a la semana
        for(let j = 0; j < matriz[i].length; j++){ // entro a cada dia
            gastos += matriz[i][j];
        }
    }
    return gastos;
}
console.log(sumar_gastos(matriz))

//! Actividad 4, Opcional
// TODO: Obtener la semana que mas gastos se realizaron
function obtener_semana_con_mas_gastos(matriz){
    let semana_mas_grande = [0/*Cantidad de dinero*/, 0/*Numero de semana*/]
    for(let i = 0, suma_de_esta_semana = 0; i < matriz.length; i++){ // entro a la semana, matriz[i]
        for(let j = 0; j < matriz[i].length; j++){ // entro al dia
            suma_de_esta_semana += matriz[i][j]
        }
        if(suma_de_esta_semana > semana_mas_grande[0]){
            semana_mas_grande[0] = suma_de_esta_semana
            semana_mas_grande[1] = i + 1
        }
        suma_de_esta_semana = 0
    }
    return `La semana con el gasto mas grande es ${semana_mas_grande[1]}, con un total de $${semana_mas_grande[0]}.`
}
console.log(obtener_semana_con_mas_gastos(matriz))

// TODO: Obtener el dia que mas gastos se realizaron
function obtener_dia_con_mas_gastos(matriz){
    let dia_mas_grande = [0/*Cantidad de dinero*/, 0/*Numero de dia*/]
    let contador = 0
    for(let i = 0; i < matriz.length; i++){ // entro a la semana, matriz[i]
        for(let j = 0, suma_de_este_dia; j < matriz[i].length; j++){ // entro al dia
            suma_de_este_dia = matriz[i][j]
            if(suma_de_este_dia > dia_mas_grande[0]){
                dia_mas_grande[0] = suma_de_este_dia
                dia_mas_grande[1] = contador + 1
            }
            contador++
        }
    }
    return `El dia con el gasto mas grande es ${dia_mas_grande[1]}, con un gasto total de $${dia_mas_grande[0]}.`
}
console.log(obtener_dia_con_mas_gastos(matriz))