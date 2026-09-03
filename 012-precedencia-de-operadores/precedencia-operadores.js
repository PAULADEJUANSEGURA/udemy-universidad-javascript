// Ejemplos de PRECEDENCIA DE OPERADORES
function precedenciaOperadores() {
    // Ejemplo 1: Operación de múltiples operadores
    let a = 12 / 3 + 2 * 3 - 1;
    // Las expresiones se revisan de izquierda a derecha, pero se aplican las reglas de precedencia de operadores.
    // Primero se realiza la división (12 / 3 = 4), luego la multiplicación (2 * 3 = 6), y finalmente se suman y restan los resultados (4 + 6 - 1 = 9).
    console.log("Resultado variable a:  12 / 3 + 2 * 3 - 1 = " + a);
    document.getElementById("resultado_01").innerHTML = "Primero se realizan las operaciones de división y multiplicación, luego se suman y restan los resultados de izquierda a derecha. <br> " + "Resultado variable a:  12 / 3 + 2 * 3 - 1 = " + a;
    // Las expresiones se revisan de izquierda a derecha, pero se aplican las reglas de precedencia de operadores.
    // Hemos visto en la imagen que la precedencia de operadores determina el orden en que se evalúan las operaciones en una expresión matemática. En este caso, la división y la multiplicación tienen mayor precedencia que la suma y la resta, por lo que se realizan primero. Luego, se suman y restan los resultados obtenidos.
    // Paso 1: Se realiza la división 12 / 3 = 4
    // Paso 2: Se realiza la multiplicación 2 * 3 = 6
    // Paso 3: Se realiza la suma 4 + 6 = 10
    // Paso 4: Se realiza la resta 10 - 1 = 9

    console.log("------ Operación con Paréntesis: ------");
    // CON PARÉNTESIS LA OPERACIÓN TIENE LA MAYOR PRIORIDAD:
    let b = 12 / (3 + 2) * 3 - 1;
    // En este caso, se utilizan paréntesis para cambiar el orden de evaluación de las operaciones. 
    // Paso 1: Se realiza la operación dentro de los paréntesis (3 + 2 = 5)
    // Paso 2: Se realiza la división 12 / 5 = 2.4
    // Paso 3: Se realiza la multiplicación 2.4 * 3 = 7.2
    // Paso 4: Se realiza la resta 7.2 - 1 = 6.2 o con más precisión de decimales 6.1999999...
    console.log("Resultado variable b:  12 / (3 + 2) * 3 - 1 = " + b);
    document.getElementById("resultado_02").innerHTML = "En este caso, se utilizan paréntesis para cambiar el orden de evaluación de las operaciones. Los paréntesis tienen la mayor prioridad. <br> " + "Resultado variable b:  12 / (3 + 2) * 3 - 1 = " + b;




};