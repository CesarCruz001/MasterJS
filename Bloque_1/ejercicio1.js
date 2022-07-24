'use strict'

/*
Programa que pide dos numero y nos dice cual es mayor, menor y si son iguales
Si los números no son un número o los numeros son menores o iguales a cero, los volvera a pedir
*/

var numero1 = parseInt (prompt("Introduce el primer número", 0));
var numero2 = parseInt (prompt("Introduce el segundo número", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN (numero2)){
    numero1 = parseInt (prompt("Introduce el primer número", 0));
    numero2 = parseInt (prompt("Introduce el segundo número", 0));
}

if(numero1 > numero2){
    alert("El numero mayor es: " + numero1);
    alert("El numero menor es: " + numero2);
    console.log ("Numero uno es mayor a numero dos");
}
else if (numero1 < numero2){
    alert("El numero mayor es: " + numero2);
    alert("El numero menor es: " + numero1);
    console.log("Numero dos es mayor a numero uno");
}
else{
    alert("Los numeros son iguales");
    console.log ("Los numeros son iguales");
}

