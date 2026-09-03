// Función para ejecutar la sentencia if - else if - else

function sentenciaIfElseIfElse(){

    // Sentencia if - else if - else
    let miNumero = parseFloat(prompt("Ingresa un número:"));

    if (miNumero > 0){
        console.log(`El número ${miNumero} es positivo`);
        document.getElementById("resultado_03_if_else_if_else").innerHTML = `El número ${miNumero} es positivo.`;
    } else if (miNumero < 0){
        console.log(`El número ${miNumero} es negativo`);
        document.getElementById("resultado_03_if_else_if_else").innerHTML = `El número ${miNumero} es negativo.`;
    } else {
        console.log(`El número ${miNumero} es cero, es decir, no es ni positivo ni negativo, es neutro`);
        document.getElementById("resultado_03_if_else_if_else").innerHTML = `El número ${miNumero} es cero, es decir, no es ni positivo ni negativo, es neutro.`;
    }
};