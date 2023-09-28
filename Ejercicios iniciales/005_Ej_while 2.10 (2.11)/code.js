/* Estructura de control while 
Vamos a jugar a adivinar la letra.
* Crea un programa con un bucle while cuya condición de salida sea el valor 's'.
* Dentro del bucle while pídele al usuario una letra.
* Si la letra elegida es la 's' el programa finaliza y muestra un mensaje de éxito por consola. Si la letra elegida no es la 's' se muestra un mensaje por consola de no ha habido suerte y se le vuelve a pedir una letra al usuario.
* El bucle se ejecutará indefinidamente hasta que el usuario introduzca la letra 's'.
*/
let letra = "R";
alert("Juego de adivinar la letra");
// La letra a adivinar será la 's'
while (letra !== 's') {
    letra = prompt('Escribe una letra (la respuesta es "s")');
    if (letra ==='s') {
        alert(`Has acertado! 🎁 \nEra la letra "${letra}"`);
        break;
    } else {
        alert('No has acertado 😞');
    }
}

// Dejo el do while comentado aquí. Sería exactamente lo mismo

/* 
    let letra = "R";
alert("Juego de adivinar la letra");
// La letra a adivinar será la 's'
do {
    letra = prompt('Escribe una letra (la respuesta es "s")');
    if (letra ==='s') {
        alert(`Has acertado! 🎁 \nEra la letra "${letra}"`);
        break;
    } else {
        alert('No has acertado 😞');
    }
} while (letra !== 's');
*/

// ****************************************************************

/* Voy a generar la misma lógica que el caso anterior pero interactuando con el DOM y un poco mejorada */
const soluciones = ['s', 'S', 'R', 'r', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'n', 'N', 'x', 'y', 'z', 'X', 'Y', 'Z'];
console.log(soluciones.length);

// Genero una solución random, dentro del array soluciones, por cada ejecución del programa
let sol = (soluciones[Math.floor(Math.random()*soluciones.length)]);

const btn = document.getElementById('btn');
const solution = document.getElementById('solution');
const result = document.getElementById('result');

function startGame() {
    let respuesta = solution.value;
    
    if (respuesta === sol) {
        result.classList.remove('incorrect');
        result.classList.remove('correct');
        result.classList.add('correct');
        result.innerHTML = `Has acertado! 🎁 \nEra la letra "${respuesta}"`
        // Si se acierta, se resetea la solución y ya es otra nueva
        sol = (soluciones[Math.floor(Math.random()*soluciones.length)]);
    } else {
        result.classList.remove('incorrect');
        result.classList.remove('correct');
        result.classList.add('incorrect');
        result.innerHTML = `No has acertado 😞`;
    }
    console.log(sol);
}

btn.addEventListener('click', startGame);