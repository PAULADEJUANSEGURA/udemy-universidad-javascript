// Dia de la semana
const formulario = document.getElementById("formDias");
const resultado = document.getElementById("resultado");
const descripcion = document.getElementById("descripcion");
const resultadoNumeroDia = document.getElementById("resultadoNumeroDia");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita que la página se recargue

  const seleccionado = document.querySelector('input[name="dia"]:checked');

 if (seleccionado === null) {
    resultado.textContent = "No has seleccionado ningún día.";
    return;
  }

   const dia = seleccionado.value;

   resultado.textContent = "Has seleccionado el día " + dia + ".";
   descripcion.textContent = "Además ese dia es " + (dia === "sábado" || dia === "domingo" ? "fin de semana." : "día laborable.");

  let diaSemana;
  if (dia === "lunes") {
    diaSemana = "lunes";
    resultadoNumeroDia.textContent = `El primer dia de la semana es ${diaSemana}.`;
  } else if (dia === "martes") {
    diaSemana = "martes";
    resultadoNumeroDia.textContent = `El segundo día de la semana es ${diaSemana}.`;
  } else if (dia === "miércoles") {
    diaSemana = "miércoles";
    resultadoNumeroDia.textContent = `El tercer día de la semana es ${diaSemana}.`;
  } else if (dia === "jueves") {        
    diaSemana = "jueves";
    resultadoNumeroDia.textContent = `El cuarto día de la semana es ${diaSemana}.`;
  } else if (dia === "viernes") {
    diaSemana = "viernes";
    resultadoNumeroDia.textContent = `El quinto día de la semana es ${diaSemana}.`;
  } else if (dia === "sábado") {
    diaSemana = "sábado";
    resultadoNumeroDia.textContent = `El sexto día de la semana es ${diaSemana}.`;
  } else if (dia === "domingo") {
    diaSemana = "domingo";
    resultadoNumeroDia.textContent = `El séptimo día de la semana es ${diaSemana}.`;
  }
});

 