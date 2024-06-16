/*
El verdulero de la esquina necesita una aplicación donde según la fruta que ingrese le diga el precio por kilo
*/

let fruta = prompt("Ingrese la fruta que desee saber el precio");   

while (fruta == null || !isNaN(fruta)) {
    alert("Solo puede ingresar frutas");
    fruta = prompt("Ingrese nuevamente el nombre de la fruta");
}
let primeraLetra = fruta.at(0).toUpperCase();

let resto = fruta.substring(1).toLowerCase();

fruta = primeraLetra + resto;

switch (fruta) {
    case "Frutilla":
        document.write(`El kilo de ${fruta} cuesta $1500`)
        break;

    case "Banana":
        document.write(`El kilo de ${fruta} cuesta $3000`)
        break;

    case "Naranja":
        document.write(`El kilo de ${fruta} cuesta $1200`)
        break;

    case "Manzana":
        document.write(`El kilo de ${fruta} cuesta $2500`)
        break;

    case "Pera":
        document.write(`El kilo de ${fruta} cuesta $2500`)
        break;

    case "Uva":
        document.write(`El kilo de ${fruta} cuesta $900`)
        break;

    default:
        alert(`No queda en el inventario la fruta seleccionada o no ingreso el nombre de una fruta valida`)
        break;
}