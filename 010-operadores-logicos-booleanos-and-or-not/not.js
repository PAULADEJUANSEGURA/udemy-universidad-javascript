// Operadores lógicos (booleanos) NOT

// El operador NOT (!) invierte el valor de una expresión booleana. Si la expresión es verdadera, NOT la convierte en falsa, y viceversa.
function ejecutarNot() {
    // Ejemplo de uso del operador NOT en una condición
    let booleano_del_usuario = prompt("Ingrese un valor booleano (true o false):");

    function convertirBooleano(booleano_del_usuario) {
        if (booleano_del_usuario === "true") {
            return !true;
        } else if (booleano_del_usuario === "false") {
            return !false;
        } else {
            alert("Por favor, ingrese 'true' o 'false'.");
            return null;
        }
    } 
    let resultado = convertirBooleano(booleano_del_usuario);
    document.getElementById("resultado").innerHTML += `Tu dijiste como booleano ${booleano_del_usuario}. Resultado invertido con NOT = ${resultado} <br>`;
};