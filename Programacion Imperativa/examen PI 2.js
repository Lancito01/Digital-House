const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]
function get_cars_newer_than(arr, year) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].modelo >= year) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(get_cars_newer_than(autos, 2020))

let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]
function sort_students_based_on_average(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, aux; j < arr.length - 1; j++) {
            if (arr[j].notaPromedio < arr[j + 1].notaPromedio) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr
}
console.log(sort_students_based_on_average(estudiantes))
// sort_students_based_on_average(estudiantes)
// console.log(estudiantes)

let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]
function get_elements_of_column(arr, column) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][column - 1])
    }
    return result
}
console.log(get_elements_of_column(matrix, 2))
function change_values_of_odd_numbers_in_matrix(arr, new_value) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 == 1) {
                arr[i][j] = new_value
            }
        }
    }
    return arr
}
console.table(change_values_of_odd_numbers_in_matrix(matrix, 0))