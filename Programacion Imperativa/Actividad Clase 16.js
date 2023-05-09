//! Actividad 1
function numeros_uno_al_cien(){
    for (let i = 0; i < 101; i++) {
        if(i%3==0){
            console.log("fizz")        
        }
        else if(i%5==0){
            console.log("buzz")
        }
        else if(i%3==0 && i%5==0){
            console.log("fizzbuzz")
        }
        else{
            console.log(i)
        }
    }
}

//! Actividad 2
function arr(arr, index){
    console.log(arr[index])
}

//! Actividad 3
function numero_del_mes(num){
    if(num > 12){
        return
    }
    if(num == 2){
        return 28
    }
    else if((num <= 7 && num%2==1) || (num > 7 && num%2==0)){
        return 31
    }
    else{
        return 30
    }
}
console.log(numero_del_mes(7))

//! Actividad 4
function dar_vuelta_numero(num){
    let arr = []
    for (let i = num.length - 1; i >= 0; i--) {
        arr.push(`${num[i]}`)
    }
    return arr.join("")
}
console.log(dar_vuelta_numero("1234567890"))

//! Actividad 5
// TODO: Escribir una función que reciba una array y solo imprima los valores que se repiten.
function imprimirRepetidos(arr) {
    let repetidos = [];
    let noRepetidos = {};
    for (let i = 0; i < arr.length; i++) {
        let valor = arr[i];
        if (valor in noRepetidos) {
            if (repetidos.indexOf(valor) === -1) {
                repetidos.push(valor);
            }
        } else {
            noRepetidos[valor] = true;
        }
    }
    return repetidos.join(",")
}
let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
console.log(imprimirRepetidos(array))