/*
3 - Números mágicos
Declara una función que genere un número aleatorio entre 1 y 10, luego solicite al usuario que ingrese un número
en ese rango e indique si el número ingresado coincide con el aleatorio. Si es así gana el juego, sino pierde,
se debe mostrar mensaje en consola.
*/

function numRandom() {
   let num = Math.ceil(Math.random() * 10);
}

console.log(numRandom);

