let nodo1 = document.createElement("h2")
let texto = document.createTextNode("Hola Mundo")

nodo1.appendChild(texto)

document.body.appendChild(nodo1)

console.log(nodo1);

let button = document.createElement("button")
let text = document.createTextNode("Click me")

button.appendChild(text)
document.body.appendChild(button)