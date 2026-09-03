// Función para ejecutar la sentencia operador ternario
function operadorTernario(){

    // Sentencia if - else if - else
    let miNumero = parseFloat(prompt("Ingresa un número:"));

    // Operador ternario
    miNumero > 0 ? console.log(`El número ${miNumero} es positivo`) : console.log(`El número ${miNumero} es negativo o neutro si es Cero`);
    document.getElementById("resultado_04_operador_ternario").innerHTML = `El número ${miNumero} es ${(miNumero > 0) ? "positivo" : "negativo o neutro si es Cero"}.`;
};