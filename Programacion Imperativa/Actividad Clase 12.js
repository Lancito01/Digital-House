let alicia = [10, 80, 75 ]
let bob = [90, 20, 25]
let puntosAlicia = 0
let puntosBob = 0

let concurso = {
    encontrarGanador: function(a, b){
        for(let i = 0; i < a.length; i++){
            if(a[i] > b[i]){
                puntosAlicia +=1
            }
            else{
                puntosBob += 1
            }
        }
        let mensaje = puntosAlicia > puntosBob ? `El ganador es Alicia con ${puntosAlicia} puntos.`:`El ganador es Bob con ${puntosBob} puntos.`
        return mensaje
    },
    etapas: function(a, b){
        let arr = []
        for(let i = 0; i < a.length; i++){
            if(a[i] > b[i]){
                arr.push(`Ganador de etapa ${i + 1} es Alicia`)
            }
            else{
                arr.push(`Ganador de etapa ${i + 1} es Bob`)
            }
        }
        return arr
    },
    ganador: function(a, b){
        let str = this.encontrarGanador(a, b)
        return str
    },
    exportarResultados: function(){
        // no visto en clase
        return
    }
}
console.log(concurso.etapas(alicia, bob))
console.log(concurso.ganador(alicia, bob))

// Bonus
function digitalHouse(a, b){
    for(let i = 1; i < 101; i++){
        if(i%a==0 && i%b==0){
            console.log("Digital")
        }
        else if(i%a==0){
            console.log("House")
        }
        else if(i%b==0){
            console.log("Digital House")
        }
        else{
            console.log(i)
        }
    }
}
digitalHouse(6, 12)

console.log(`\n\n==========================\n\n`)

function sumArray(num_arr){
    let sum = 0
    for(let i = 0; i<num_arr.length; i++){
        sum += num_arr[i]
    }
    return sum
}
console.log(sumArray([1,2,3]))

function join(str_arr){
    let str = ""
    for(let i = 0; i < str_arr.length; i++){
        str += str_arr[i]
    }
    return str
}
console.log(join(["h","o","l","a"]))