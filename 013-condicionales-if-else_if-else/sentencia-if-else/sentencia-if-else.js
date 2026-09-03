// Función para ejecutar la sentencia if - else
function sentenciaIfElse(){
    // Sentencia if - else
    let miNumero = parseFloat(prompt("Ingresa un número:"));

    // Este ejercicio se corregirá en el último ya que el Cero no es negativo, sino un valor neutro.

    if (miNumero > 0){
        console.log(`El número ${miNumero} es positivo`);
    } else {
        console.log(`El número ${miNumero} es negativo o es cero, es decir, elemento neutro`);
    }

    document.getElementById("resultado_02_if_else").innerHTML = `El número ${miNumero} es ${miNumero > 0 ? "positivo" : "negativo o es cero, es decir, elemento neutro"}`;

};
