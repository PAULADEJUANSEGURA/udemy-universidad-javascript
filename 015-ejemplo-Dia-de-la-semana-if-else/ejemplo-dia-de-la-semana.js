// Dia de la semana
const formulario = document.getElementById("formDias");
const resultado = document.getElementById("resultado");
const descripcion = document.getElementById("descripcion");

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

});