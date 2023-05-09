function repeated_values(arr){
    let repeated = []
    let previous_numbers = []
    for(let i = 0; i < arr.length; i++){
        if(previous_numbers.includes(arr[i])){
            repeated.push(arr[i])
        }
        else{
            previous_numbers.push(arr[i])
        }
    }
    return repeated
}
console.log(repeated_values([3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]))

function create_a_table(rows, columns){
    let table = []
    let number_to_add = 1
    for (let rows = 0; rows < rows; rows++) {
        let row = []
        for (let row_element = 0; row_element < columns; row_element++) {
            rows[row_element] = number_to_add
            number_to_add++
        }
        table.push(row)
    }
    return table

}
console.table(create_a_table(5, 9))
