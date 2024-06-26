/*
2 - Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función
para calcular su perímetro y mostrarlo por pantalla.

- La fórmula del perímetro  es p = 2*(a +b)
*/

function perimetro(a,b) {
    perimetro = 2*(a +b);

    document.write(`El perimetro del rectangulo es: ${perimetro}`)
}

let altura = Number(prompt('Ingrese la altura del rectangulo'));

let base = Number(prompt('Ingrese la base del rectangulo'));

perimetro(altura, base);