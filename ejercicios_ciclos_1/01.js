//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let num1 = 0;
let num2 = 0;

num1 = prompt('Ingrese el primer numero');
num2 = prompt('Ingrese el segundo numero');

while(isNaN(num1) || isNaN(num2)){
    alert('Solo puede ingresar numeros')
    num1 = prompt('Ingrese nuevamente el primer numero');
    num2 = prompt('Ingrese el nuevamente segundo numero');
}



switch (true) {
    case num1 > num2:
        document.write(`El numero mayor es el ${num1}`)
        
        break;

    case num1 < num2:
        document.write(`El numero mayor es el ${num2}`)
        
        break;

    default:
        document.write(`Los numeros son iguales`)
        break;
}