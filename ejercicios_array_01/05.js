/* Ejercicio 5
Dado el array de pilotos de Fórmula 1, reemplazar 'Fernando Alonso' con 'Carlos Sainz'.
*/

const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']

f1Drivers.splice(2,2);

f1Drivers.splice(2,0,"Sergio Pérez", "George Russell")

f1Drivers.splice(3,1,"Carlos Sainz")