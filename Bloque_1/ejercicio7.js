'use strict'

/*
Tabla de multiplicar de un número introducido por el usuario.
*/

var numero = parseInt(prompt("¿De qué número deseas la tabla?:",1));

for( var i = 0; i <= 10; i++ ){
    document.write( numero + " x " + i + " = " + (i*numero) + "<br/>");
}