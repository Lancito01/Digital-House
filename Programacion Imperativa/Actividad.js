// 1)
function conversion(x){
    return x*2.54
}
console.log(`5 pulgadas en centimetros es: ${conversion(5)}.`);

// 2)
function string_to_url(string){
    return `https://www.${string}.com`
}
console.log(`"pepito" en forma de url sería ${string_to_url("pepito")}`)

// 3)
function string_to_admir(string){
    return `¡${string}!`
}
console.log(`${string_to_admir("Esto va atener admiración")}`)

// 4)
function human_to_dog_years(number){
    return number*7
}
console.log(`1 año de humano equivale a ${human_to_dog_years(1)} años de perro.`)

// 5)
function monthly_salary_to_hourly(salary, hours_per_month = 40){
    return salary / hours_per_month
}
console.log(`Trabajando 40 horas por mes, y con un sueldo de $1000, el precio de mi sueldo por hora sería $${monthly_salary_to_hourly(1000)}.`)

// 6)
function calculadorIMC(height, weight){
    return weight/((height/100)**2)
}
console.log(`Con un peso de 68kg, y una altura de 165cm, to IMC sería de ${calculadorIMC(165, 68)}`)

// 7)
function string_to_upper_case(string){
    return string.toUpperCase()
}
console.log(`${string_to_upper_case("esto va a estar en mayuscula")}`)

// 8)
function object_to_type_of_object(ent){
    return typeof(ent)
}
console.log(`8 es de tipo ${object_to_type_of_object(8)}.`)

// 9)
function circle_radius_to_circumference(radius){
    return Math.PI*radius*2
}
console.log(`Un círculo con radio de 8cm, va a tener una circumferencia de ${circle_radius_to_circumference(8)}cm.`)
