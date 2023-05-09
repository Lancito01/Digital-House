function propiedadUnica(arr, str){
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][str] /*!== undefined*/){
            new_arr.push({[str]:arr[i][str]})
        }
    }
    return new_arr
}

let arr = [
    {
        nombre: "Lean",
        edad: 27
    },
    {
        nombre: "Eze",
        edad: 49
    }
]
console.log(propiedadUnica(arr, "nombre"))