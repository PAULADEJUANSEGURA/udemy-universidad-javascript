function sentenciaIf() {
    // Sentencia if
    let miNumero = parseFloat(prompt("Ingresa un número:"));

        if (miNumero > 0){
            console.log(`El número ${miNumero} es positivo`);
            document.getElementById("resultado_01_if").innerHTML = `El número ${miNumero} es positivo`;
        }

    // Podemos hacer otro if para la mejor comprensión del programa, aunque también podríamos usar un else para el caso contrario. 
    // Este ejercicio se corregirá en el último ya que el Cero no es negativo, sino un valor neutro.
    
        if (miNumero <= 0){
            console.log(`El número ${miNumero} es negativo o es cero, es decir, elemento neutro`);
            document.getElementById("resultado_01_if").innerHTML = `El número ${miNumero} es negativo o es cero, es decir, elemento neutro`;
        }
    }