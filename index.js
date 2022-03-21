'use strict';

let desaprobados = 0;
let aprobados = 0;
let promocionados = 0;
let min = Number.POSITIVE_INFINITY;
let max = Number.NEGATIVE_INFINITY;
let contador = 0;

while (confirm('¿Quiere agregar la nota de un estudiante?')){
    let nota = parseFloat(+prompt('Ingrese la nota (de 1 a 10) de un alumno'));

    contador ++;

    if (nota < 4){
        desaprobados ++;
    } else {
        if (nota >= 7){
            promocionados ++;
            aprobados ++;
        } else {
            aprobados ++;
        }
    }

    if (nota < min){
        min = nota;
    } else if (nota > max){
        max = nota;
    }
}

alert(`El promedio de los alumnos desaprobados es de ${desaprobados / contador}%`);
alert(`El promedio de los alumnos aprobados es de ${aprobados / contador}%`);
alert(`El promedio de los alumnos promocionados es de ${promocionados / contador}%`);
alert(`La nota más baja ingresada es ${min} y la nota mas alta ingresada es ${max}`);