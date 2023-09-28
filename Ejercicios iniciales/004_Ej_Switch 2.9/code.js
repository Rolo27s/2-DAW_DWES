/* Estructura de control switch
Crea un fichero Javascript e incluye las instrucciones necesarias que te permitan ejecutar la siguiente lógica de gestión de horarios de apertura:

* Pídele al usuario la inicial del día de la semana (L, M, X, J, V, S, D)
* Por medio de la estructura de control switch muestra por consola el horario de apertura del día elegido. Por supuesto, el horario debe ser diferente cada día.
*/

var diaSemana = prompt("Ingrese el día de la semana (L, M, X, J, V, S, D)");

switch (diaSemana) {
    case "L":
        alert("Lunes. Horario de apertura: 08:00-18:00");
        break;
    case "M":
        alert("Martes. Horario de apertura: 09:00-18:00");
        break;
    case "X":
        alert("Miércoles. Horario de apertura: 10:00-18:00");
        break;
    case "J":
        alert("Jueves. Horario de apertura: 11:00-18:00");
        break;
    case "V":
        alert("Viernes. Horario de apertura: 12:00-18:00");
        break;
    case "S":
        alert("Sábado. Horario de apertura: 09:00-14:00");
        break;
    case "D":
        alert("Domingo. Horario de apertura: 10:00-14:00");
        break;
    default:
        alert("Día no valido");
}

// ****************************************************************

/* Escribe un programa en javaScript que tome un número del 1 al 7 para representar el mismo problema que el caso anterior. El 1 será el lunes, el 2 será el martes, el 3 será el miércoles, el 4 será el jueves, el 5 será el viernes y el 6 será el sabado. El 7 será el domingo. */


var diaSemana = prompt("Ingrese el NUMERO del día de la semana (1:L, 2:M, 3:X, 4:J, 5:V, 6:S, 7:D)");

switch (diaSemana) {
    case "1":
        alert("Lunes. Horario de apertura: 08:00-18:00");
        break;
    case "2":
        alert("Martes. Horario de apertura: 09:00-18:00");
        break;
    case "3":
        alert("Miércoles. Horario de apertura: 10:00-18:00");
        break;
    case "4":
        alert("Jueves. Horario de apertura: 11:00-18:00");
        break;
    case "5":
        alert("Viernes. Horario de apertura: 12:00-18:00");
        break;
    case "6":
        alert("Sábado. Horario de apertura: 09:00-14:00");
        break;
    case "7":
        alert("Domingo. Horario de apertura: 10:00-14:00");
        break;
    default:
        alert("Día no valido");
}