'use strict'

/*
Muestra todos los números divisores de un numero introducido por el usuario.
*/

var numero = parseInt(prompt("Introduce un número: ",1));

for(var i = 0; i <= numero; i++){
    if (numero%i == 0){
        document.write("El número " + i + " es divisor de " + numero + "<br/>");
        //console.log("El número " + i + " es divisor de " + numero);
    }
}