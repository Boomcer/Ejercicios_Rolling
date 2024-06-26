/* Ejercicio 7
Crea un script que te permita agregar el nombre de varias ciudades en un array hasta que presiones cancelar,
luego deberas mostrar en consola los nombres de dichas ciudades ordenadas alfabéticamente
*/

let ciudades = [];
let ciudad = "";
let acumulador = 0;

do {
    ciudad = "";

    ciudad = prompt("Ingrese la ciudad que desea agregar a la lista")
    ciudades.splice(acumulador,0,ciudad);

    acumulador ++;

    
} while (ciudad);

console.log(ciudades.sort());