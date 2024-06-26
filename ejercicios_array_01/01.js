/* Ejercicio 1
Tenemos un array llamado "planetas" que contiene el nombre de los planetas de nuestro sistema solar ordenados por su
distancia con el sol, debes mostrar en consola el nombre del último planeta aplicando un método de array.

planetas=["Mercurio","Venus","Tierra","Marte","Júpiter","Saturno","Urano","Neptuno"]
*/



let planetas = ["Mercurio","Venus","Tierra","Marte","Júpiter","Saturno","Urano","Neptuno"];

console.log(`El planeta mas lejano al sol es: ${planetas.at(-1)}`)