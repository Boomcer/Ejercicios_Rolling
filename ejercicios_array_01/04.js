/* Ejercicio 4
Dado el array de pilotos de Fórmula 1, agrega los nombres de 'Sergio Pérez' y 'George Russell'
 después de 'Max Verstappen'.
*/

const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']

f1Drivers.splice(2,2);

f1Drivers.splice(2,0,"Sergio Pérez", "George Russell")

