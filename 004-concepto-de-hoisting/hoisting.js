// 'use strict'
// El concepto de Hoisting quiere decir que podemos primero utilizar una variable y después declararla:

// Mediante buenas prácticas lo hacemos en este orden
var x; // 1.) Declaramos la variable
x = 10; // 2.) Inicializamos la variable
console.log(x);

// Generalmente antes de poder utilizar una variable debemos declararla
/* Pero el concepto de HOISTING 
   Nos permite poner la declaración de la variable en cualquier parte del programa
   Podemos trabajar con variables incluso aunque la declaración esté después en otra parte del programa
*/
y = 25;
console.log(y);
var y;
// Esto es útil en variables globales pero el HOISTING solo funciona con var y no con let

// Con let no se aplica el HOISTING
z = 36;
console.log(z);
let z;
// Nos aparece el mensaje de que no se puede acceder a z antes de su inicializacion

// Y para no usar HOISTING podemos añadir al inicio del archivo las palabras 'use strict'
