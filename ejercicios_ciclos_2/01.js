/*
1)- Realizar una página con un script que calcule el valor de la letra de un número de DNI
(Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo:
Input:  40773821
Output: ‘L’
*/

let letras = "T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E";

let divisor = Math.ceil(Math.random() * 23);

let dni = Number(prompt('Ingrese su DNI, sin puntos ni espacios'));

let resultado = 0;


while(isNaN(dni)){
    alert("Solo se admiten numeros")
    dni = Number(prompt('Ingrese su DNI nuevamente, sin puntos ni espacios'));
}

while(dni > 99999999){
    alert("Solo se admite hasta el numero 99.999.999")
    dni = Number(prompt('Ingrese su DNI nuevamente, sin puntos ni espacios'));
}

letras = letras.split(" ");

do {
    resultado = dni % divisor;

    alert(`La letra asignada a su DNI es la letra ${letras.at(resultado)}`)

    dni = Number(prompt('Ingrese su DNI, sin puntos ni espacios'));
    
} while (dni);

