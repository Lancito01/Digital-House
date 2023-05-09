let numeros = [1, 2, 3, 4, 5, 6]

function separate_even_and_odd(arr) {
    let result = {/*even: [], odd: []*/}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.even = result.even || [] // result.even = result.even ? result.even : []
            result.even.push(arr[i])
        }
        else{
            result.odd = result.odd || [] // result.odd = result.odd ? result.odd : []
            result.odd.push(arr[i])
        }
    }
    return result
}
console.log(separate_even_and_odd(numeros))