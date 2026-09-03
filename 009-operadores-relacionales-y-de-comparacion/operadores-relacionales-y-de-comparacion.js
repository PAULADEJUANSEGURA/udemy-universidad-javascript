// Operadores Relacionales y de Comparación
let num1 = 5;
let numtexto = '5';
console.log(num1); // 5
console.log(numtexto); // '5'   

// Operador de igualdad (==) compara los valores de las variables, sin importar su tipo.
console.log(num1 == numtexto); // true, ya que ambos tienen el mismo valor 5    

// Operador de igualdad estricta (===) compara tanto el valor como el tipo de las variables.
console.log(num1 === numtexto); // false, ya que num1 es un número y numtexto es una cadena de texto. Aquí da false porque el tipo de dato es diferente, aunque el valor sea el mismo.

// String interpolation (Interpolación de cadenas) permite insertar variables dentro de una cadena de texto utilizando la sintaxis `${variable}`. Este caracter especial se utiliza con las comillas invertidas `backticks` para crear una cadena de texto que incluya valores dinámicos. 
console.log(`El valor de num1 es: ${num1} y el valor de numtexto es: ${numtexto} pero tienen tipos diferentes`); 
// Esto imprimirá: "El valor de num1 es: 5 y el valor de numtexto es: 5 pero tienen tipos diferentes"

// Operador de igualdad estricta (===) compara tanto el valor como el tipo de las variables.
console.log(num1 === numtexto); // false, ya que num1 es un número y numtexto es una cadena de texto. Aquí da false porque el tipo de dato es diferente, aunque el valor sea el mismo.

// Pero con el String interpolation, ambos valores se convierten en cadenas de texto, por lo que la comparación será verdadera.
console.log(`${num1}` === `${numtexto}`); // true, ya que ambos son cadenas de texto con el mismo valor "5"
// Aquí num1 se convierte en una cadena de texto "5" y numtexto ya es una cadena de texto "5", por lo que la comparación es verdadera incluso aunque en origen num1 sea un número y numtexto sea una cadena de texto. Con String Interpolation, ambos valores se convierten en cadenas de texto, por lo que la comparación es verdadera. Por lo tanto, el resultado es true.
// Aquí num1 se convierte en una cadena de texto "5".

// Y también podemos visualizar el valor de nuestras variables dentro de la interpolación de cadenas o String interpolation, por ejemplo:
console.log(`${num1} === ${numtexto}`); // "5 === 5" Esto imprimirá: "5 === 5" ya que ambos valores son iguales, pero no compara los tipos de datos, solo muestra los valores de las variables dentro de la interpolación de cadenas. 
// Por lo tanto, el resultado es "5 === 5" y no un valor booleano true o false. 
// Aquí num1 sigue siendo un número y numtexto sigue siendo una cadena de texto, pero la interpolación de cadenas solo muestra los valores de las variables sin comparar sus tipos de datos. Por lo tanto, el resultado es "5 === 5". Fijándonos en que la cadena es desde el primer backtick hasta el último backtick: `${num1} === ${numtexto}` y que los === no hacen comparación en este caso, solo son parte de la cadena de texto que se está mostrando. 
// Por lo tanto, el resultado es "5 === 5" y no un valor booleano true o false.

// Operador de igualdad estricta (===) compara tanto el valor como el tipo de las variables.
// Aquí incluso podemos usar la interpolación de cadenas (String interpolation) para mostrar el resultado pero si incluimos toda la expresión dentro de la interpolación el resultado dará falso porque mirará los tipos de datos y no solo los valores. Por ejemplo:
console.log(`${ num1 === numtexto }`); // false, ya que num1 es un número y numtexto es una cadena de texto. Aquí da false porque el tipo de dato es diferente, aunque el valor sea el mismo. Aquí aunque usemos la interpolación de cadenas, el resultado de la expresión es falso porque el operador de igualdad estricta (===) compara tanto el valor como el tipo de las variables. Y en la expresión num1 sigue siendo un número y numtexto sigue siendo una cadena de texto, por lo que la comparación es falsa. Por lo tanto, el resultado es false.
// Aquí num1 sigue siendo un número.


// Operador de igualdad (==) compara los valores de las variables, sin importar su tipo.
console.log(num1 == numtexto); // true, ya que ambos tienen el mismo valor 5  
// Ahora vamos a evalúar esta expresión dentro de la interpolación de cadenas, y el resultado será verdadero porque ambos valores son iguales.
console.log(`${ num1 == numtexto }`); // true, ya que ambos tienen el mismo valor 5  
// Aquí num1 vale 5 y numtexto vale '5', pero al usar el operador de igualdad (==), se comparan los valores y no los tipos, por lo que la comparación es verdadera. 
// Por lo tanto, el resultado es true incluso usando el String interpolation.
// También podemos visualizar el valor de nuestras variables dentro de la interpolación de cadenas o String interpolation, por ejemplo:
console.log(`${num1} == ${numtexto}`); // "5 == 5" Esto imprimirá: "5 == 5" ya que ambos valores son iguales, pero no compara los tipos de datos, solo muestra los valores de las variables dentro de la interpolación de cadenas. 
// Por lo tanto, el resultado es "5 == 5" y no un valor booleano true o false. 
// Aquí num1 sigue siendo un número y numtexto sigue siendo una cadena de texto, pero la interpolación de cadenas solo muestra los valores de las variables sin comparar sus tipos de datos. Por lo tanto, el resultado es "5 == 5". Fijándonos en que la cadena es desde el primer backtick hasta el último backtick: `${num1} == ${numtexto}` y que los == no hacen comparación en este caso, solo son parte de la cadena de texto que se está mostrando. 
// Por lo tanto, el resultado es "5 == 5" y no un valor booleano true o false.

//------------------

// Operador distinto (!=) compara los valores de las variables, sin importar su tipo.
console.log(num1 != numtexto); // false, ya que ambos tienen el mismo valor 5

// Operador distinto estricto (!==) compara tanto el valor como el tipo de las variables.
console.log(num1 !== numtexto); // true, ya que num1 es un número y numtexto es una cadena de texto. Aquí da true porque el tipo de dato es diferente, aunque el valor sea el mismo. Así que aquí da verdadero porque si son distintos por el tipo de dato.

// Y con String interpolation podemos mostrar el resultado de la comparación, por ejemplo:
// Versión con distinto estricto (!==) que compara tanto el valor como el tipo de las variables.
console.log(`${ num1 !== numtexto }`); // true, ya que num1 es un número y numtexto es una cadena de texto. Aquí da true porque el tipo de dato es diferente, aunque el valor sea el mismo. Aquí aunque usemos la interpolación de cadenas, el resultado de la expresión es verdadero porque el operador de igualdad estricta (!==) compara tanto el valor como el tipo de las variables. Y en la expresión num1 sigue siendo un número y numtexto sigue siendo una cadena de texto, por lo que la comparación es verdadera. Por lo tanto, el resultado es true.
// Aquí num1 sigue siendo un número. Aquí SI es distinto estricto (!==) que compara tanto el valor como el tipo de las variables, por lo que el resultado es true. Sí son distintos.
// Aquí si es verdadero que son distintos, ya que num1 es un número y numtexto es una cadena de texto. Por lo tanto, el resultado es true. Sí son distintos. Es verdadero que son distintos porque mira tanto el valor como el tipo. Y en tipo son diferentes. Luego da true.

// Versión con distinto (!=) que compara los valores de las variables, sin importar su tipo.
console.log(`${ num1 != numtexto }`); // false, ya que ambos tienen el mismo valor 5. Aquí aunque usemos la interpolación de cadenas, el resultado de la expresión es falso porque el operador de igualdad (!=) compara los valores de las variables, sin importar su tipo. Y en la expresión num1 es un 5 aunque sigue siendo un número y numtexto sigue siendo una cadena de texto "5", por lo que la comparación es falsa. No los considera distintos. Por lo tanto, el resultado es false porque al compararlos ambos valen 5. 
// Aquí con el operador distinto (!=) que compara los valores de las variables, sin importar su tipo, el resultado es false. No son distintos. Considera que 5 en num1 es igual que "5" en cadena de texto numtexto, aunque sean de tipos diferentes. 
// Por lo tanto, a la pregunta de si son distintos la respuesta o el resultado es false. 
// No son distintos. Es falso que sean distintos. 

// Y con String interpolation podemos mostrar el resultado de la comparación, por ejemplo:
console.log(`${num1} != ${numtexto}`); // "5 != 5" Esto imprimirá: "5 != 5" ya que ambos valores son iguales, pero no compara los tipos de datos, solo muestra los valores de las variables dentro de la interpolación de cadenas. 
// Por lo tanto, el resultado es "5 != 5" y no un valor booleano true o false. 
// Aquí num1 sigue siendo un número y numtexto sigue siendo una cadena de texto, pero la interpolación de cadenas solo muestra los valores de las variables sin comparar sus tipos de datos. 
// Por lo tanto, el resultado es "5 != 5". Fijándonos en que la cadena es desde el primer backtick hasta el último backtick: `${num1} != ${numtexto}` y que el símbolo del operador distinto (!=) no hacen comparación en este caso, solo son parte de la cadena de texto que se está mostrando. // Por lo tanto, el resultado es "5 != 5" y no un valor booleano true o false.

// Si comparamos los valores de las variables, con el operador menor que o mayor que...
console.log(num1 < numtexto); // false, ya que ambos tienen el mismo valor 5. Aquí aunque usemos el operador menor que (<), la comparación es falsa porque ambos valores son iguales. Por lo tanto, el resultado es false.
console.log(num1 > numtexto); // false, ya que ambos tienen el mismo valor 5. Aquí aunque usemos el operador mayor que (>), la comparación es falsa porque ambos valores son iguales. Por lo tanto, el resultado es false.
// Aquí ambos valores son "iguales" porque su valor es 5 el mismo em ambos, por lo que no es menor ni mayor. Por lo tanto, el resultado es false en ambos casos.

// Si preguntamos con mayor o igual que o menor o igual que...
console.log(num1 <= numtexto); // true, ya que ambos tienen el mismo valor 5. Aquí aunque usemos el operador menor o igual que (<=), la comparación es verdadera porque ambos valores son iguales. Por lo tanto, el resultado es true.
// Esta expresión da verdadera porque si son iguales.
console.log(num1 >= numtexto); // true, ya que ambos tienen el mismo valor 5. Aquí aunque usemos el operador mayor o igual que (>=), la comparación es verdadera porque ambos valores son iguales. Por lo tanto, el resultado es true.
// Aquí ambos valores son "iguales" porque su valor es 5 el mismo em ambos, por lo que es menor o igual y mayor o igual. Por lo tanto, el resultado es true en ambos casos. Son verdaderas ambas expresiones ya que si son valores IGUALES por eso da true.

//---------------------------------------------------
// Aquí con otros valores vemos cómo funcionan los operadores relacionales y de comparación.
// Los operadores relacionales y de comparación se utilizan para comparar valores y devolver un resultado booleano (true o false).

let a = 10;
let b = 20;
let c = '10';
console.log(a > b); // false porque 10 no es mayor que 20
console.log(a < b); // true porque 10 es menor que 20
console.log(a >= 10); // true porque 10 es mayor o igual que 10 (es igual en este caso)
console.log(a <= 10); // true porque 10 es menor o igual que 10 (es igual en este caso)
console.log(a == c); // true (comparación de valores, no de tipos) (volvemos a mirar lo de los ejemplos anteriores de igualdad y desigualdad, que el valor es igual aunque el tipo sea diferente)
console.log(a === c); // false (comparación de valores y tipos) (volvemos a mirar lo de los ejemplos anteriores de igualdad y desigualdad, pero aquí da false porque el tipo de dato es diferente, aunque el valor sea el mismo)
console.log(a != b); // true porque 10 es diferente de 20
console.log(a !== c); // true (diferente en valor o tipo) (volvemos a mirar lo de los ejemplos anteriores de igualdad y desigualdad, pero aquí da true porque el tipo de dato es diferente, aunque el valor sea el mismo)


// En base a los resultados de estas comparaciones, podemos tomar decisiones en nuestro código utilizando estructuras de control como if, else if y else. Por ejemplo:

if (a > b) {
    console.log('a es mayor que b');    
} else if (a < b) {
    console.log('a es menor que b');
} else {
    console.log('a es igual a b');
}
console.log('Fin de la comparación');

// También podemos comparar valores de diferentes tipos, pero debemos tener cuidado con las comparaciones que involucran tipos diferentes, ya que pueden llevar a resultados inesperados. Por ejemplo:
let x = 5;
let y = '5';
console.log(x == y); // true (comparación de valores, no de tipos) Operador de igualdad "=="
console.log(x === y); // false (comparación de valores y tipos) Operador de igualdad estricta "==="


let varZ = 1;

if (varZ > 0) {
    console.log('varZ es positivo');
} else if(varZ < 0) {
    console.log('varZ es negativo');
} else {
    console.log('varZ es cero');    
}