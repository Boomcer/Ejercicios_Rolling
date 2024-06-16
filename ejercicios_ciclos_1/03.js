//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
//si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = 0;

edad = prompt('Ingrese su edad');

while (isNaN(edad)) {
    alert('Solo se admiten numeros')
    edad = prompt('Ingrese su edad nuevamente');
}

if(edad >= 18){
    document.write("Ya posee edad suficiente para conducir")
}
else{
    document.write("Aun no posee la edad suficiente para conducir")
}