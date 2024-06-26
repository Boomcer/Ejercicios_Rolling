/*
3 - Números mágicos
Declara una función que genere un número aleatorio entre 1 y 10, luego solicite al usuario que ingrese un número
en ese rango e indique si el número ingresado coincide con el aleatorio. Si es así gana el juego, sino pierde,
se debe mostrar mensaje en consola.
*/

function numRandom() {
    return num = Math.ceil(Math.random() * 10);
}


let respuesta = Number(prompt("Intente adivinar el numero aleatorio, debe ser entre el 1 y el 10"));

if(respuesta === numRandom()){
    console.log("Felicidades adivinaste");
}
else{
    console.log(`Lo siento el numero correcto era el: ${numRandom()}`);
}