// Operadores lógicos (booleanos) AND

// AND (&&) - Retorna true si ambos operandos son true
let a = true;
let b = true;
let c = false;
let d = false;

// Ejemplo de uso del operador AND: Evalúa la primera variable booleana y, si es true, evalúa la segunda variable booleana. Si ambas son true, retorna true; de lo contrario, retorna false.
console.log(`AND (&&): ${a} && ${b} = ${a && b}`); // true
console.log(`AND (&&): ${a} && ${c} = ${a && c}`); // false

// Aquí la primera condición es false, por lo que no se evalúa la segunda condición y retorna false porque con el operador AND, si una de las condiciones es false, el resultado final será false.
console.log(`AND (&&): ${c} && ${a} = ${c && a}`); // false

// Por último, si ambas condiciones son false, el resultado final también será false.
console.log(`AND (&&): ${c} && ${d} = ${c && d}`); // false

// Ejemplo de uso del operador AND con expresiones más complejas con un prompt() y una combinación de condicionales y operadores lógicos:
// Supongamos que queremos verificar la edad de un usuario y si puede conducir un ciclomotor u otro tipo de vehículo. Para ello, podemos usar el operador AND para combinar las condiciones de edad y tipo de vehículo.
function ejecutarAnd(){
    console.log("----------Ejemplo de PROGRAMA --------");
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad < 15) {
        console.log("No puede conducir ningún tipo de vehículo.");
        document.getElementById("resultado").innerHTML = `Con la edad ${edad}: No puede conducir ningún tipo de vehículo.`;
    } else if (edad >= 15 && edad < 16){
        console.log("Puede conducir un ciclomotor de hasta 50 cc con el 'permiso AM'.");
        document.getElementById("resultado").innerHTML = `Con la edad ${edad}: Puede conducir un ciclomotor de hasta 50 cc con el 'permiso AM'.`;
    } else if (edad >= 16 && edad < 18){
        console.log("Puede conducir un ciclomotor de hasta 125 cc y 11 kW con el 'permiso A1'.");
        document.getElementById("resultado").innerHTML = `Con la edad ${edad}: Puede conducir un ciclomotor de hasta 125 cc y 11 kW con el 'permiso A1'.`;
    } else if (edad >= 18 && edad < 20){
        console.log("Puede conducir bastantes tipos de vehículos con el 'permiso A2' para ciclomotores y el 'permiso B' para automóviles y otros vehículos.");
        document.getElementById("resultado").innerHTML = `Con la edad ${edad}: Puede conducir bastantes tipos de vehículos con el 'permiso A2' para ciclomotores y el 'permiso B' para automóviles y otros vehículos.`;
    } else if (edad >= 20 && edad < 65){
        console.log("Puede conducir cualquier tipo de vehículo con el 'permiso A' para todo tipo de motocicletas y el 'permiso B' para automóviles y otros vehículos.");
        document.getElementById("resultado").innerHTML = `Con la edad ${edad}: Puede conducir cualquier tipo de vehículo con el 'permiso A' para todo tipo de motocicletas y el 'permiso B' para automóviles y otros vehículos.`;
    } else if(edad >= 65){
        console.log("A partir de los 65 años: renovación cada 5 años mediante un examen médico. Si existen problemas de salud que afecten a la conducción, pueden establecerse periodos de renovación más cortos o determinadas restricciones.");
        document.getElementById("resultado").innerHTML = `Con la edad ${edad}: A partir de los 65 años: renovación cada 5 años mediante un examen médico. Si existen problemas de salud que afecten a la conducción, pueden establecerse periodos de renovación más cortos o determinadas restricciones.`;
    }
};
