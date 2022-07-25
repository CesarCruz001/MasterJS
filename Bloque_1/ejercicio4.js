'use strict'

/*
Mostrar todos los números impares que esten entre dos números,
introducidos por el usuario.
*/

var numero1 = parseInt(prompt("Ingresa el primero número: ",0));
var numero2 = parseInt(prompt("Ingresa el segundo número: ",0));


while(numero1 < numero2){
    numero1++;

    if(numero1%2 != 0){
        document.write ("El " + numero1 + " es impar. <br/>");
        //console.log("El " + numero1 + " es impar");
    }
}
