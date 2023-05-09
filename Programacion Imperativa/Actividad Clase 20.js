const likes = [79, 83, 39, 38, 40, 15, 98, 20, 71, 8, 47, 7, 75, 92, 62]

function sort_likes_amount(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, aux; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    // Getting the order of the results:
    for (let i = 0; i < 3; i++) {
        result.push(arr[i]) // Pushing the first 3 likes
    }
    result.push(arr[arr.length - 1]) // Pushing the last like
    return `La publicación con más likes tiene ${result[0]} likes, la segunda tiene ${result[1]} likes y la tercera tiene ${result[2]} likes. La publicación con menos likes tiene ${result[3]} likes.`
}
console.log(sort_likes_amount(likes))

const temperatura = [
    {
        dia: 1,
        mes: 1,
        maxima: 32,
        minima: 20
    },
    {
        dia: 2,
        mes: 4,
        maxima: 26,
        minima: 13
    },
    {
        dia: 1,
        mes: 6,
        maxima: 23,
        minima: 8
    },
    {
        dia: 8,
        mes: 4,
        maxima: 25,
        minima: 12
    }
]
function sort_by_min_temperature_ascending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if (arr[j].minima > arr[j + 1].minima) {
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr
}
console.log(sort_by_min_temperature_ascending(temperatura))

function sort_by_max_temperature_descending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if (arr[j].maxima < arr[j + 1].maxima) {
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr
}
console.log(sort_by_max_temperature_descending(temperatura))