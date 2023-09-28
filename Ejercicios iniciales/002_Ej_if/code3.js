/* 
Ejercicio 3

Escribe un programa en JavaScript que determine la calificación correspondiente a una puntuación ingresada por un estudiante. El usuario deberá ingresar una puntuación, y el programa mostrará un mensaje indicando la calificación de acuerdo con la siguiente escala:
*/

alert("Soy el tercer problema");

function setNEj3(numEj) {
    const regEx3 = /^(100(\.0*)?|[1-9]?\d(\.\d*)?|0(\.0*)?)$/;
    
    let ej3 = prompt(numEj + ") .Ingresa un número entre el 0 y el 100");
    
    if (regEx3.test(ej3)) alert(`numero introducido = ${ej3}. Es válido.`);
    
    while (!regEx3.test(ej3)) {
        alert(`${ej3}. NO es válido.`);
        ej3 = prompt(numEj + ") .Ingresa un número entre el 0 y el 100");
        if (regEx3.test(ej3)) alert(`numero introducido = ${ej3}. Es válido.`);
    }

    return ej3;
}

let solution = setNEj3(3);

if (solution < 60) {
    alert('Puntuación menor que 60: "F"');
} else if(solution < 70) {
    alert('Puntuación menor que 70: "D"');
} else if(solution < 80) {
    alert('Puntuación menor que 80: "C"');
} else if(solution < 90) {
    alert('Puntuación menor que 90: "B"');
} else {
    alert('Puntuación mayor o igual que 90: "A"');
}

