let matriz = [
    ["Lucas", "Camila", "Pedro"],
    ["Juan", "Luisa", null]
]
console.table(matriz)

console.log(matriz[1][1])
matriz[1][2] = "Jerry"; console.log(matriz[1][2])
console.table(matriz)

function say_hi(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(`Hola soy ${arr[i][j]}`)
        }
    }
}
say_hi(matriz)