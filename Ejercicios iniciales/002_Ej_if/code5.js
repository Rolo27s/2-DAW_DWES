/* 
Ejercicio 5
Escribe un programa en JavaScript que determine si un estudiante ha aprobado o suspendido un examen basado en su puntuación. Además, si el estudiante ha aprobado, el programa verificará si obtuvo una puntuación perfecta y mostrará un mensaje especial en ese caso. Solicita al usuario que ingrese la puntuación del examen.
*/

alert("Soy el quinto problema");

function setNEj5(numEj) {
    const regEx5 = /^(100(\.0*)?|[1-9]?\d(\.\d*)?|0(\.0*)?)$/;
    
    let ej5 = prompt(numEj + ") .Ingresa una nota entre el 0 y el 100");
    
    if (regEx5.test(ej5)) alert(`numero introducido = ${ej5}. Es válido.`);
    
    while (!regEx5.test(ej5)) {
        alert(`${ej5}. NO es válido.`);
        ej5 = prompt(numEj + ") .Ingresa un estado:\n\t0 : pendiente\n\t1 : en proceso\n\t2 : entregado");
        if (regEx5.test(ej5)) alert(`numero introducido = ${ej5}. Es válido.`);
    }

    return ej5;
}

let solution5 = parseInt(setNEj5(5));


// Lógica para ver si aprueba o suspende
if (solution5 >= 50) {
    alert('Puntuación mayor o igual que 50: "Aprobado"');
} else {
    alert('Puntuación menor que 50: "Suspenso"');
}

if (solution5 === 100) {
    alert("Impresionante tienes la puntuación perfecta!")
}