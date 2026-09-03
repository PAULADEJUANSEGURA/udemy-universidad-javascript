// Operadores lógicos (booleanos) OR

// OR (||) - Retorna true si al menos uno de los operandos es true
let a = true;
let b = true;
let c = false;
let d = false;

// Ejemplo de uso del operador OR: Evalúa la primera variable booleana y, si es false, evalúa la segunda variable booleana. Si al menos una de las dos es true, retorna true; de lo contrario, retorna false.

// Aquí la primera condición es true y la segunda condición también es true, por lo que retorna true.
console.log(`OR (||): ${a} || ${b} = ${a || b}`); // true
// Aquí la primera condición es true y la segunda condición es false, pero como es el operador OR, con que una de ellas sea true, retorna true.
console.log(`OR (||): ${a} || ${c} = ${a || c}`); // true

// Aquí la primera condición es false y la segunda condición es true, pero como es el operador OR, con que una de ellas sea true, retorna true.
console.log(`OR (||): ${c} || ${a} = ${c || a}`); // true

// Por último, si ambas condiciones son false, el resultado final también será false.
console.log(`OR (||): ${c} || ${d} = ${c || d}`); // false  


// Ejemplo de uso del operador OR con expresiones más complejas con un prompt() y una combinación de condicionales y operadores lógicos:
function ejecutarOr(){
    console.log("----------Ejemplo de PROGRAMA --------");
    document.getElementById("titulo_del_programa").innerHTML = "=== SOLICITUD DE PRÉSTAMO ===";

        let nombre = prompt("Introduce tu nombre:");
        document.getElementById("nombre").innerHTML = "Nombre: " + nombre;
        let edad = parseInt(prompt("Introduce tu edad:"));
        document.getElementById("edad").innerHTML = "Edad: " + edad;
        let ingresos = parseFloat(prompt("Introduce tus ingresos mensuales (€):"));
        document.getElementById("ingresos_economicos").innerHTML = "Ingresos económicos mensuales: " + ingresos + " €";
        let aval = prompt("¿Tienes un avalista? (si/no):").toLowerCase();
        document.getElementById("avalista").innerHTML = "Avalista: " + aval;

        if (edad >= 18) {
            if (ingresos >= 1500 || aval === "si") {
                console.log("\nSolicitud aceptada");
                console.log("Puedes solicitar el préstamo.");
                document.getElementById("resultado").innerHTML = "Solicitud aceptada. Puedes solicitar el préstamo.";
            } else {
                console.log("\nSolicitud rechazada");
                console.log("Necesitas ganar al menos 1500 € o tener un avalista.");
                document.getElementById("resultado").innerHTML = "Solicitud rechazada. Necesitas ganar al menos 1500 € o tener un avalista.";
            }
        } else {
            console.log("\nSolicitud rechazada");
            console.log("Debes ser mayor de edad para solicitar el préstamo.");
            document.getElementById("resultado").innerHTML = "Solicitud rechazada. Debes ser mayor de edad para solicitar el préstamo.";
}
};
