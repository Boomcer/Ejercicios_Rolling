/* Ejercicio 1
Tenemos un array llamado "planetas" que contiene el nombre de los planetas de nuestro sistema solar ordenados por su
distancia con el sol, debes mostrar en consola el nombre del último planeta aplicando un método de array.

planetas=["Mercurio","Venus","Tierra","Marte","Júpiter","Saturno","Urano","Neptuno"]
*/



/* Ejercicio 3
Tenemos un array que contiene la lista de 5 pilotos de Fórmula 1, pero se nos informó que el tercero y cuarto quedaron descalificados por lo que hay que eliminarlos de la lista.

const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']
*/

/* Ejercicio 4
Dado el array de pilotos de Fórmula 1, agrega los nombres de 'Sergio Pérez' y 'George Russell' después de 'Max Verstappen'.
*/

/* Ejercicio 5
Dado el array de pilotos de Fórmula 1, reemplazar 'Fernando Alonso' con 'Carlos Sainz'.
*/

/* Ejercicio 6
En un colegio hay tres comisiones distintas con 5 alumnos cada una, debido a cambios en los horarios se deben unir las comisiones en una sola llamada 'comisionNueva'. Luego imprimir los nombres de los alumnos de la nueva comisión.
*/

/* Ejercicio 7
Crea un script que te permita agregar el nombre de varias ciudades en un array hasta que presiones cancelar, luego deberas mostrar en consola los nombres de dichas ciudades ordenadas alfabéticamente
*/

/*  Ejercicio 8
En un array se encuentra la lista de jugadores de un equipo de futbol, pero algunos de la lista estarán de suplentes en el próximo partido. Crea un nuevo array llamado 'suplentes' basado en dicha lista que contenga los nombres de los tres primeros jugadores.

let jugadores = ['Alex Collado', 'Emerson Royal', 'Iñaki Peña','Lionel Messi', 'Gerard Piqué', 'Sergio Busquets', 'Jordi Alba', 'Frenkie de Jong', 'Ansu Fati', 'Pedri', 'Ousmane Dembélé', 'Marc-André ter Stegen', 'Sergi Roberto', 'Ronald Araújo', 'Miralem Pjanic', 'Philippe Coutinho', 'Samuel Umtiti', 'Riqui Puig', 'Sergiño Dest', 'Martin Braithwaite', 'Clément Lenglet', 'Sergiño Dest', 'Éric García', 'Memphis Depay', 'Neto', 'Pedri', 'Oscar Mingueza']
*/

let planetas = ["Mercurio","Venus","Tierra","Marte","Júpiter","Saturno","Urano","Neptuno"];

console.log(`El planeta mas lejano al sol es: ${planetas.at(-1)}`)