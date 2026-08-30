// Operadores Relacionales y de Comparación

// Los operadores relacionales y de comparación se utilizan para comparar valores y devolver un resultado booleano (true o false).

let a = 10;
let b = 20;
let c = '10';
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= 10); // true
console.log(a <= 10); // true
console.log(a == c); // true (comparación de valores, no de tipos)
console.log(a === c); // false (comparación de valores y tipos)
console.log(a != b); // true
console.log(a !== c); // true (diferente en valor o tipo)       

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