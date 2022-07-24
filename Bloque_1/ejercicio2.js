'use strict'

/* 
Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo
*/

var suma = 0;
var cont = 0;

do{

    var numero = parseInt (prompt("Introduce números hasta que introduzcas uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;

    } else if(numero >= 0){
        suma = suma + numero;
        cont++;
    }
    console.log(suma);
    console.log(cont);

}while(numero >= 0)

alert("La suma de todos los numeros es: " + suma );
alert("La media de todos los numeros es: " + (suma/cont));