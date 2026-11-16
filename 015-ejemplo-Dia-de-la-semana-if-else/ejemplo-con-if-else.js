const formularioDias = document.getElementById('formularioDias');
const resultadoNumeroDia = document.getElementById('resultadoNumeroDia');

formularioDias.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const numeroDias = document.getElementById('numeroDias').value;

    let diaSemana;
    if (numeroDias === '1') {
        diaSemana = 'lunes';
        resultadoNumeroDia.textContent = `El día de la semana correspondiente al número ${numeroDias} es ${diaSemana}.`;
    } else if (numeroDias === '2') {
        diaSemana = 'martes';
        resultadoNumeroDia.textContent = `El día de la semana correspondiente al número ${numeroDias} es ${diaSemana}.`;
    } else if (numeroDias === '3') {
        diaSemana = 'miércoles';
        resultadoNumeroDia.textContent = `El día de la semana correspondiente al número ${numeroDias} es ${diaSemana}.`;
    } else if (numeroDias === '4') {
        diaSemana = 'jueves';
        resultadoNumeroDia.textContent = `El día de la semana correspondiente al número ${numeroDias} es ${diaSemana}.`;
    } else if (numeroDias === '5') {
        diaSemana = 'viernes';
        resultadoNumeroDia.textContent = `El día de la semana correspondiente al número ${numeroDias} es ${diaSemana}.`;
    } else if (numeroDias === '6') {
        diaSemana = 'sábado';
        resultadoNumeroDia.textContent = `El día de la semana correspondiente al número ${numeroDias} es ${diaSemana}.`;
    } else if (numeroDias === '7') {
        diaSemana = 'domingo';
        resultadoNumeroDia.textContent = `El día de la semana correspondiente al número ${numeroDias} es ${diaSemana}.`;
    } else {
        resultadoNumeroDia.textContent = 'Número no válido. Por favor, introduce un número entre 1 y 7.';
        return;
    }

    resultadoNumeroDia.textContent = `El día de la semana correspondiente al número ${numeroDias} es ${diaSemana}.`;
});