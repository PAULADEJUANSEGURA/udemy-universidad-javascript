/* Un operador de asignación es un operador que asigna un valor a una variable. El operador de asignación más común es el signo igual (=).
Por ejemplo, la expresión x = 5 asigna el valor 5 a la variable x. */

let x = 5;
console.log(x); // 5

/* Los operadores de asignación compuestos combinan una operación aritmética con la asignación. Por ejemplo, el operador += suma un valor a la variable y luego asigna el resultado a la misma variable. */

x += 3; // Equivalente a x = x + 3
console.log(x); // 5 + 3 = 8

/* Otros operadores de asignación compuestos incluyen:
 -= : resta un valor a la variable y asigna el resultado.
 *= : multiplica la variable por un valor y asigna el resultado.
 /= : divide la variable por un valor y asigna el resultado.
 %= : calcula el módulo de la variable con un valor y asigna el resultado.
*/

let miNumero = 10;
console.log(miNumero); // 10

miNumero = 20; // Asignación simple Modificación del valor de la variable miNumero
console.log(miNumero); // 20

/* Ejemplo de operadores de asignación compuestos */

miNumero += 5; // Equivalente a miNumero = miNumero + 5
console.log(miNumero); // 20 + 5 = 25

miNumero -= 3; // Equivalente a miNumero = miNumero - 3
console.log(miNumero); // 25 - 3 = 22

miNumero *= 2; // Equivalente a miNumero = miNumero * 2
console.log(miNumero); // 22 * 2 = 44

miNumero /= 4; // Equivalente a miNumero = miNumero / 4
console.log(miNumero); // 44 / 4 = 11

miNumero %= 2; // Equivalente a miNumero = miNumero % 2
console.log(miNumero); // 11 % 2 = 1

/* Este último por ser el Módulo de la división de 11 entre 2, da de resto 1. 
Divide 11 entre 2, el resultado es 5 y el resto es 1.  11 / 2 = 5, resto 1.
Ya que 5 * 2 = 10, y de resto 1. 
Por lo tanto, miNumero ahora es igual a 1. */

/* En cuanto al operador compuesto de Exponenciación (**=), 
este operador eleva la variable a la potencia de un valor y asigna el resultado. */

miNumero = 8; // Asignación simple
miNumero **= 2; // Equivalente a miNumero = miNumero ** 2 o miNumero elevado a la potencia de 2
console.log(miNumero); // 8 ** 2 = 64 
/* Es lo mismo que 8 * 8 = 64, ya que 8 elevado a la potencia de 2 
es igual a 8 multiplicado por sí mismo una vez. */

