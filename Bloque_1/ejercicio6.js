'use strict'

/*
Nos dice si un númer es par o impar, introducido por el usuario.
*/

var numero  = parseInt(prompt("Introduce un número; ",0));

while(isNaN(numero)){
    numero  = parseInt(prompt("Introduce un número: ",0));
}

if(numero%2 == 0){
    document.write("El número " + numero + " es par");
}else{
    document.write("El número " + numero + " es impar.")
}