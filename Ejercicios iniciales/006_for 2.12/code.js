/* Estructura de control for 
    Crea un programa que muestre en la consola todos los números múltiplos de 7 que hay del 1 al 100. Al finalizar debe indicar cuántos son.
*/
let count = 0;

function multiplo(numero) {
    for (let i = 1; i <= 100; i++) {
        if (i % numero === 0) {
            console.log(i);
            count++;
        }
    }
}

multiplo(7);
console.log(`Hay un total de ${count} números múltiplos de 7`);
