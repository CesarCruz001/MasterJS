'use strict'

/* 
El programa cumplira con los siguientes requisitos:
- Pedirá 6 numeros al usuario y los insertara en un array.
- Deberá mostrar todos los elementos del array en el cuerpo de la página
  y la consola.
- Deberá oderdar el array.
- Debera invertir el orden.
- Mostrar cuantos elementos tiene el array.
- Busqueda de un valor introducido por el usuario, mostrar si lo encuentra
  y su índice.
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1> Contenido del Array " + textoCustom + "</h1> <br/>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>")
});
    document.write("</ul>");

}

//Pedir los 6 números.
var numeros = new Array(6);

for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("Introduce un número: ", 0));
}

//Mostrar en consola.
console.log(numeros);

//Mostrar en cuerpo de la página.
mostrarArray(numeros);

//Ordenar Array.
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "ordenado");

//Invertir.
numeros.reverse();
mostrarArray(numeros, "Reversa");

//Contar elementos
document.write("<h1> El array tiene: " + numeros.length + " elementos </h1>");

//Busqueda.
var busqueda  = parseInt(prompt("Busca un número", 0));
var posicion = numeros.findIndex(numero => numero == busqueda );
if (posicion && posicion != -1){
    document.write("<h1> Encontrado </h1>");
    document.write("<h1> Posición de la busqueda: " + posicion + "</h1>");
}else{
    document.write("No encontrado");
}