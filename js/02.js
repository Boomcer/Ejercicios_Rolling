//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let num = 0;

num = prompt('Ingrese el numero a dividir')

while(isNaN(num) || num == 0){
    alert('Solo puede ingresar numeros, excluyendo el 0')
    num = prompt('Ingrese nuevamente el numero a dividir') 
}

switch (true) {
    case num % 2 ===0:
        document.write(`El numero ${num} es divisible por uno de los divisores`)
        break;

    case num % 3 ===0:
        document.write(`El numero ${num} es divisible por uno de los divisores`)
        break;

    case num % 5 ===0:
        document.write(`El numero ${num} es divisible por uno de los divisores`)
        break;

    case num % 7 ===0:
        document.write(`El numero ${num} es divisible por uno de los divisores`)
        break;

    default:
        document.write(`El numero ${num} no es divisible por ninguno de los divisores`)
        break;
}