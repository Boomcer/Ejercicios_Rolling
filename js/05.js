/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un
«alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números 
introducidos.
*/

let num = 0;
let contenedor = 0;

do {
    num = Number(prompt('Ingrese un numero'));
    if(isNaN(num)){
        while(isNaN(num)){
            alert('Solo se pueden ingresar numeros')
            num = Number(prompt('Ingrese un numero nuevamente'));
            contenedor = Number(contenedor + num);
        }
    }
    else{
        contenedor = Number(contenedor + num);
    }
    
} while (num);

document.write(`La sumatoria total de los numeros es de ${contenedor}`);