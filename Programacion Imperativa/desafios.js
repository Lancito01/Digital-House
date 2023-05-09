// A
function suma(a, b){
    return a  + b
}
function suma2(a, b){
    let math = a > b? a + b: a - b
    return math
}
function suma3(a, b, c, d){
    let ret = a+b+c+d>7?"Aprobado":"otra chance "
    return ret
}
function suma4(a, b, c, d){
    let sum = a+b+c+d
    let math = (sum)%2==0?sum/2:sum*2
    return math
}
// B
function edades(arr){
    let sum = 0
    for(let i = 0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum/arr.length
}
function edades2(arr){
    let max = 0
    for(let i = 0;i<arr.length;i++){
        max=arr[i]>max?arr[i]:max
    }
    return max
}
function edades3(arr){
    let min = 0
    for(let i = 0;i<arr.length;i++){
        min=arr[i]<min?arr[i]:min
    }
    return min
}
function edades4(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                return true
            }
        }
    }
    return false
    }
  