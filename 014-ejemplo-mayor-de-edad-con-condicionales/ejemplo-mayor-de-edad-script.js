// Script para comprobar si una persona es mayor de edad
    const EDAD_MAYOR_DE_EDAD = 18;
    const formulario = document.getElementById("formEdad");
    const resultado = document.getElementById("resultado");

    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault(); // evita que la página se recargue

      let edadPersona = parseInt(document.getElementById("edad").value);

      if (edadPersona >= EDAD_MAYOR_DE_EDAD && edadPersona < 30) {
        resultado.textContent = "Eres mayor de edad. Y eres un adulto joven.";
        console.log("Eres mayor de edad. Y eres un adulto joven.");
      } else if (edadPersona >= EDAD_MAYOR_DE_EDAD && edadPersona >= 30 && edadPersona < 65) {
        resultado.textContent = "Eres mayor de edad. Y eres un adulto.";
        console.log("Eres mayor de edad. Y eres un adulto.");
      } else if (edadPersona < EDAD_MAYOR_DE_EDAD && edadPersona === 0) {
        resultado.textContent = "Eres menor de edad. Eres un recién nacido.";
        console.log("Eres menor de edad. Eres un recién nacido.");
      } else if (edadPersona < EDAD_MAYOR_DE_EDAD && edadPersona <= 12 && edadPersona > 0) {
        resultado.textContent = "Eres menor de edad. Eres un niño.";
        console.log("Eres menor de edad. Eres un niño.");
      } else if (edadPersona < EDAD_MAYOR_DE_EDAD && edadPersona > 12 && edadPersona < 18) {
        resultado.textContent = "Eres menor de edad. Eres un adolescente.";
        console.log("Eres menor de edad. Eres un adolescente.");
      } else if (edadPersona >= EDAD_MAYOR_DE_EDAD && edadPersona >= 65 && edadPersona < 100) {
        resultado.textContent = "Eres mayor de edad y estás en la tercera edad.";
        console.log("Eres mayor de edad y estás en la tercera edad.");
      } else if (edadPersona >= EDAD_MAYOR_DE_EDAD && edadPersona >= 100) {
        resultado.textContent = "Eres realmente muy longevo y centenario. Tienes 100 años o más.";
        console.log("Eres realmente muy longevo y centenario. Tienes 100 años o más.");
      } else {
        resultado.textContent = "Por favor, ingresa una edad válida.";
        console.log("Por favor, ingresa una edad válida."); 
      }
    });