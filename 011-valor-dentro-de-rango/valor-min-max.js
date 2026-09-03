
function verificarRango(){
    // Ejemplo de valor dentro de un rango utilizando operadores lógicos
    let valor = prompt("Ingrese un valor numérico:");

    let minimo = 0;
    let maximo = 25;

    // Operador AND (&&) para verificar si el valor está dentro del rango y ambas condiciones deben ser true para que esté dentro del rango
    if (valor >= minimo && valor <= maximo) {
        document.getElementById("resultado").innerHTML = `El valor dado por el usuario es ${valor}. El valor está dentro del rango.`;
    } else {
        document.getElementById("resultado").innerHTML = `El valor dado por el usuario es ${valor}. El valor no está dentro del rango.`;
    }
};