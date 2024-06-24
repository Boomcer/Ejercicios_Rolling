/*
2)- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que
cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

let numeros = 1;
let resto1 = 0;
let resto2 = 0;
let resto3 = 0;

do {

    resto1 = numeros % 4;
    resto2 = numeros % 9;
    resto3 = numeros % 5;

    if (resto1 === 0) {
        document.write(`${numeros} (Múltiplo de 4 ) <br>`);
    }

    else if (resto2 === 0) {
        document.write(`${numeros} (Múltiplo de 9) <br>`)
    } 
    
    else {
        document.write(`${numeros} <br/>`)
    }

    if (resto3 === 0) {
        document.write(`<hr/>`)
    }

    numeros ++
    
} while (numeros <= 500);

