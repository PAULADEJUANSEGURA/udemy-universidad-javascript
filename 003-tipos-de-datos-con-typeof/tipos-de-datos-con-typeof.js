/* 
TIPOS DE DATOS EN JAVASCRIPT
El lenguaje JavaScript es debilmente tipado y es dinámico:
*/
let miVariable = 100;
console.log("miVariable ahora vale un literal numerico = " + miVariable);

// Podemos alojar cualquier tipo de dato en una variable ya declarada e inicializada previamente simplemente asignandole un nuevo valor:
miVariable = "Ahora esta variable es una cadena";
console.log("miVariable ahora vale una cadena de texto de tipo String = " + miVariable);

// Ahora vamos a usar typeof para ver el tipo de dato de las variables:
let miEntero = 10;
console.log(miEntero);
console.log(typeof miEntero);

let miFlotante = 7.9;
console.log(miFlotante);
console.log(typeof miFlotante);

let miCadena = "Hola Mundo";
console.log(miCadena);
console.log(typeof miCadena);

let miBool = true;
console.log(miBool);
console.log(typeof miBool);

let miNulo = null;
console.log(miNulo);
console.log(typeof miNulo);
//Vemos aqui que el tipo de dato NULL es un tipo OBJECT

let miUndef = undefined;
console.log(miUndef);
console.log(typeof miUndef);
//Vemos aqui que el tipo de dato UNDEFINED es undefined

