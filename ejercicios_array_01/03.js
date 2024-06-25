/* Ejercicio 3
Tenemos un array que contiene la lista de 5 pilotos de Fórmula 1, pero se nos informó que el tercero y cuarto
quedaron descalificados por lo que hay que eliminarlos de la lista.

const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']
*/

const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']

f1Drivers.splice(2,2);

console.log(f1Drivers)