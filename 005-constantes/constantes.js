// Una constante es parecido a una variable pero una vez definido su valor no podemos modificarlo
/* Una constante se define en mayúsculas y si tiene palabras se separan con guión bajo. 
La notación que estás usando para los nombres de las constantes se llama SCREAMING_SNAKE_CASE 
(también conocida como UPPER_SNAKE_CASE).
*/
const MI_CONSTANTE_PI = 3.14;
const MI_CONSTANTE_SEGUNDOS_POR_MINUTO = 60;
console.log(MI_CONSTANTE_PI);
console.log(MI_CONSTANTE_SEGUNDOS_POR_MINUTO);

// No podemos modificar su valor: MI_CONSTANTE_PI = 5; daria error al intentar volver a asignarle un nuevo valor

// También podemos usar constantes de la Librería Math
console.log(Math.PI);

// Tampoco podemos declarar una constante y dejarla sin asignar su valor
// Es necesario declarar y asignar valor en la misma linea al crear una constante
const MI_CONSTANTE_NUMERO = 125;
console.log(MI_CONSTANTE_NUMERO);