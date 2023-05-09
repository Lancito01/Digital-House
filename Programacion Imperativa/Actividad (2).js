/* Actividad 1 */console.log("\nActividad 1")
function diez_numeros_siguientes(numero){
    for(let i = numero + 1; i < numero+11 ; i++){
        console.log(i)
    }
}
diez_numeros_siguientes(10)

/* Actividad 2 */console.log("\nActividad 2")
function tres_en_tres_del_cinco_al_veinte(){
    for(i = 5;i<21;i += 3){
        console.log(i)
    }
}
tres_en_tres_del_cinco_al_veinte()

/* Actividad 3 */console.log("\nActividad 3")
function sumatoria_hasta_el_cien(){
    let sumatoria = 0
    for(i = 1;i<101;i++){
        sumatoria += i
    }
    return sumatoria
}
console.log(sumatoria_hasta_el_cien())

/* Actividad 4 */console.log("\nActividad 4")
function factorial(numero){
    let calculo = 1
    for(let i = 1;i <= numero;i++){
        calculo *= i
    }
    return calculo
}
console.log(factorial(5))

/* Actividad 5 */console.log("\nActividad 5")
function fibonacciSequence(n) {
let a = 1, b = 1
console.log(a); console.log(b)

while(a + b < n){
    let c = a + b
    console.log(c)
    a = b
    b = c
}
}
fibonacciSequence(50)