let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
]

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(titular){
        for(let i = 0; i < this.clientes.length; i++){
            if(titular === this.clientes[i].titularCuenta){ // compara el nombre "titular" con "titularCuenta" en la base de datos
                return this.clientes[i] // devuelve el cliente que encontro
            }
        }
        return false // si no encuentra nada
    },
    deposito: function(titular, cantidad_de_dinero){
        for(let i = 0; i < this.clientes.length; i++){
            if(titular === this.clientes[i].titularCuenta){ // compara el nombre "titular" con "titularCuenta" en la base de datos
                this.clientes[i].saldoEnPesos += cantidad_de_dinero
                console.log(`Depósito realizado, su nuevo saldo es: ${this.clientes[i].saldoEnPesos}.`)
            }
        }
        return false // si no hay nadie con ese nombre
    },
    extraccion: function(titular, cantidad_de_dinero){
        for(let i = 0; i < this.clientes.length; i++){
            if(titular === this.clientes[i].titularCuenta){ // compara el nombre "titular" con "titularCuenta" en la base de datos
                if(this.clientes[i].saldoEnPesos - cantidad_de_dinero >= 0){
                    this.clientes[i].saldoEnPesos -= cantidad_de_dinero
                    console.log(`Extracción realizada, su nuevo saldo es: ${this.clientes[i].saldoEnPesos}.`)
                }
                else{
                    console.log("Fondos insuficientes.")
                }
            }
        }
        return false // si no hay nadie con ese nombre
    }
}
console.log(banco.consultarCliente("Jacki Shurmer"))
banco.deposito("Ansel Ardley", 1000000)
banco.extraccion("Ramon Connell", 4000)

function propiedadUnica(arr2, str){
    let arr = []
    for(let i = 0; i < arr2.length; i++){
        if(arr2[i][str]/*!=null*/){ // para corroborar que exista
            arr.push({[str]:arr2[i][str]}) // agregarlo al array vacio
        }
    }
    return arr
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

let alumno = {
    nombre: "Jorge",
    numero_de_legajo: 8373,
    lista_de_notas: [8, 4, 8, 9, 10],
    promedio: function(){
        let suma = 0
        for(let i = 0; i<this.lista_de_notas.length;i++){
            suma += this.lista_de_notas[i]
        }
        return suma / this.lista_de_notas.length > 7?`El promedio es ${suma / this.lista_de_notas.length} y el alumno está aprobado.`:`El promedio es ${suma / this.lista_de_notas.length} y el alumno NO está aprobado.`
    }
}
console.log(alumno.promedio())
