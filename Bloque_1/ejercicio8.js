'use strict'

/*
Calculadora con las siguientes caracteristicas:
-Pide dos números por pantalla.
-Si algún número esta mal, volverlo a pedir.
-En el cuerpo de la página, en una alerta y por consola el resultado
 de sumar, restar, multiplicar y dividir esas dos cifras.
*/

var numero1 = parseInt(prompt("Ingresa el primer número: ",0));
var numero2 = parseInt(prompt("Ingresa el segundo número: ",0));


while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Ingresa el primer número: ",0));
    numero2 = parseInt(prompt("Ingresa el segundo número: ",0));
}

var resultado = "La suma es: " + (numero1+numero2) + " <br/>" +
                "La resta es: " + (numero1-numero2) + " <br/>" +
                "La multiplicación es: " + (numero1*numero2) + " <br/>"+
                "La división es: " + (numero1/numero2);

var resultadoConsola =  "La suma es: " + (numero1+numero2) + " \n" +
                        "La resta es: " + (numero1-numero2) + " \n" +
                        "La multiplicación es: " + (numero1*numero2) + " \n"+
                        "La división es: " + (numero1/numero2) ;

document.write(resultado);
alert(resultadoConsola);
console.log(resultadoConsola);



