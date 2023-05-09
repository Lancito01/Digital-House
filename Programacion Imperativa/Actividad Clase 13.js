function loopDePares(num){
    for(let i = 0; i<101; i++){
        console.log((i+num)%2==0?`El numero ${i} es par`:i)
    }
}
loopDePares(6)

function loopDeImpares(num, palabra){
    for(let i = 0; i<101; i++){
        console.log((i+num)%2==1?`${palabra}`:i)
    }
}
loopDeImpares(6, "aguanta")

function sumatoria(numero){
    let suma = 0
    for(let i = 0; i<=numero; i++){
        suma += i
    }
    return suma
}
console.log(sumatoria(8))

function nuevo_arreglo(num){
    let arr = []
    for(let i = 1; i<=num; i++){
        arr.push(i)
    }
    return arr
}
console.log(nuevo_arreglo(4))

function split(str){
    let arr = []
    for(let i = 0; i<str.length; i++){
        arr.push(str[i])
    }
    return arr
}
console.log(split("hola"))

function array_handler(arr1, arr2){
    for(let i = 0; i<arr1.length; i++){
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`)
    }
}
array_handler([1,2,3,4], ["h", "o", "l", "a"])

function palindrome(str){
    let word = ""
    for(let i = str.length-1; i > -1; i--){
        word = word + str[i]
    }
    if(word == str){
        return true
    }
    return false
}
console.log(palindrome("anaa"))