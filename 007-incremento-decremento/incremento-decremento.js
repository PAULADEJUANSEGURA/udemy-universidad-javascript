// Operadores de incremento y decremento
let a = 0;
console.log(a); // 0

// 1. Pre-incremento ------------------
++a;
console.log(a); // 1
/* Mediante el pre-incremento, primero se incrementa el valor de la variable y luego se utiliza en la expresión. 
----------------------------------*/

// 2. Post-incremento ------------------
a++;
console.log(a); // 2
/* Mediante el post-incremento, primero se utiliza el valor de la variable en la expresión y luego se incrementa.
----------------------------------*/

// 3. Pre-decremento ------------------
--a;
console.log(a); // 1
/* Mediante el pre-decremento, primero se decrementa el valor de la variable y luego se utiliza en la expresión.
----------------------------------*/

// 4. Post-decremento ------------------
a--;
console.log(a); // 0
/* Mediante el post-decremento, primero se utiliza el valor de la variable en la expresión y luego se decrementa.
----------------------------------*/


// Ejemplo de incremento y decremento en una expresión

// 1. Pre-incremento en una expresión
let x = 5;
let y = ++x;

console.log("x =", x);
console.log("y =", y);
/* En este caso, primero se incrementa el valor de "x" a 6 
y luego se asigna a "y",
por lo que ambos son 6. */

// --------------------------------------

// 2. Post-incremento en una expresión
let m = 5;
let n = m++;

console.log("m =", m);
console.log("n =", n);
/* En este caso, primero se asigna el valor de "m" a "n" (5),
y luego se incrementa el valor de "m" a 6.
por lo que "m" es 6 y "n" es 5. */  

// --------------------------------------


// 3. Pre-decremento en una expresión
let p = 5;
let q = --p;    

console.log("p =", p);
console.log("q =", q);
/* En este caso, primero se decrementa el valor de "p" a 4 
y luego se asigna a "q",
por lo que ambos son 4. */  

// --------------------------------------

// 4. Post-decremento en una expresión
let r = 5;
let s = r--;

console.log("r =", r);
console.log("s =", s);
/* En este caso, primero se asigna el valor de "r" a "s" (5),
y luego se decrementa el valor de "r" a 4.
por lo que "r" es 4 y "s" es 5. */  


