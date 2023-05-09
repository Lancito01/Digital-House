function check_for_sorting_asc(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        if (matrix[i] > matrix[i + 1]) {
            return false
        }
    }
    return true
}
console.log(check_for_sorting_asc([1, 2, 3, 4, 5, 6, 7, 8]))

function create_a_matrix(rows, columns) {
    let matrix = []
    for (let i = 0, number = 1; i < rows; i++) {
        let row = []
        for (let j = 0; j < columns; j++) {
            row[j] = number
            number++
        }
        matrix.push(row)
    }
    return matrix
}
console.table(create_a_matrix(10, 10))

const personas = [
    {
        nombre: "Arlene Barr",
        legajo: 3955,
        edad: 33,
    },
    {
        nombre: "Roslyn Torres",
        legajo: 3925,
        edad: 27,
    },
    {
        nombre: "Cleo Lopez",
        legajo: 1965,
        edad: 34,
    },
    {
        nombre: "Daniel Malone",
        legajo: 3925,
        edad: 30,
    },
    {
        nombre: "Ethel Leon",
        legajo: 1915,
        edad: 34,
    },
    {
        nombre: "Harding Mitchell",
        legajo: 1905,
        edad: 25,
    }
]
function order_people_based_on_param_and_order_type(arr, param, order_type) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, aux; j < arr.length - 1; j++) {
            if (order_type.toLowerCase() === "asc") {
                if (arr[j][param] > arr[j + 1][param]) {
                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux
                }
            }
            else if (order_type.toLowerCase() === "desc") {
                if (arr[j][param] < arr[j + 1][param]) {
                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux
                }
            }
        }
    }
    return arr
}
console.log(order_people_based_on_param_and_order_type(personas, "legajo", "asc"))

const fila1 = [4, 9, 2]
const fila2 = [3, 5, 7]
const fila3 = [8, 1, 6]
const matrix = [
    fila1,
    fila2,
    fila3
]
console.table(matrix)
function sum_row(matrix, row) {
    let sum = 0
    for (let i = 0; i < 3; i++) {
        sum += matrix[row - 1][i]
    }
    return sum
}
console.log(sum_row(matrix, 3))
function array_of_sum_of_diagonals_of_matrix(arr) {
    let sums = []
    let diag_sum = 0
    for (let i = 0; i < arr.length; i++) {
        diag_sum += arr[i][i]
    }
    sums.push(diag_sum)
    diag_sum = 0
    for (let i = 0; i < arr.length; i++) {
        diag_sum += arr[i][arr.length - 1 - i]
    }
    sums.push(diag_sum)
    return sums
}
console.log(array_of_sum_of_diagonals_of_matrix(matrix))
function return_even_numbers_from_matrix(arr) {
    let even_numbers = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 == 0) {
                even_numbers.push(arr[i][j])
            }
        }
    }
    return even_numbers
}
console.log(return_even_numbers_from_matrix(matrix))
function return_number_higher_than_5_from_matrix(arr) {
    let even_numbers = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > 5) {
                even_numbers.push(arr[i][j])
            }
        }
    }
    return even_numbers
}
console.log(return_number_higher_than_5_from_matrix(matrix))
function return_object_with_even_and_odd_numbers_from_matrix(arr) {
    obj = {}
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] % 2 == 0 ? obj.even ? obj.even.push(arr[i][j]) : obj.even = [arr[i][j]] : obj.odd ? obj.odd.push(arr[i][j]) : obj.odd = [arr[i][j]]
        }
    }
    return obj
}
console.log(return_object_with_even_and_odd_numbers_from_matrix(matrix))
