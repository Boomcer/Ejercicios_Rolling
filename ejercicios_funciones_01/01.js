//Ejercicio 1
/*
Crea tres arrays de 5 números cada uno, luego escribe una función declarativa que reciba los tres arrays como
parámetros y realice las siguientes tareas:
- Unir los tres arrays en un nuevo array llamado 'integrados' 
- Ordenar el array de menor a mayor
- Crear un nuevo array que contenga todos los números del array 'integrados' que sean menores de 60.
*/



let lista1 = [9, 55,42, 31, 36]
let lista2 =[32, 96, 23, 93, 89]
let lista3 =[7, 6, 18, 39, 16]


let listaFinal = [];

function unirArrays(a1, a2, a3) {
    let integrados = [...a1.slice(), ...a2.slice(), ...a3.slice()];
    //integrados.sort(function ordearNum(a, b){
    //    return a - b});
    return integrados;
}

let listaUnida = unirArrays(lista1,lista2,lista3);

//for (let i = 0; i < unirArrays(lista1, lista2, lista3).lenght; i++) {
//    if (unirArrays(lista1, lista2, lista3)) {
        
//    }
    
//}