/*
1 - Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
sólo por minúsculas o por una mezcla de ambas.


2 - Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función
para calcular su perímetro y mostrarlo por pantalla.

- La fórmula del perímetro  es p = 2*(a +b)

3 - Números mágicos
Declara una función que genere un número aleatorio entre 1 y 10, luego solicite al usuario que ingrese un número
en ese rango e indique si el número ingresado coincide con el aleatorio. Si es así gana el juego, sino pierde,
se debe mostrar mensaje en consola.

*/


function capitalizarFrase (palabra) {

    palabra = prompt("Ingrese una frase");

    if (palabra === palabra.toUpperCase()) {
        console.log('La palabra esta formada por mayusculas')
    
    }

    else if (palabra === palabra.toLowerCase()){
        console.log('La palabra esta formada por minusculas')

    }

    else
    {
        console.log('La palabra esta formada por mayusculas y minusculas')
    }
    
}



capitalizarFrase();


