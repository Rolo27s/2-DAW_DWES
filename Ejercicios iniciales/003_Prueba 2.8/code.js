/* 
Crea un fichero JavaScript e incluye las instrucciones necesarias que te permitan ejecutar la siguiente lógica:

Pídele su nombre y edad al usuario
Utiliza la estructura de control if para determinar en qué franja de edad se encuentra, de manera que consideres lo siguiente:
Niño: hasta 12 años
Adolescente: de 13 a 17 años
Trabajador: de 18 a 64 años
Jubilado: de 65 años o más
3. El programa debe de terminar mostrando este tipo de mensaje en verde y negrita por consola: “juan tiene 21 años y por tanto es Trabajador”
 ENTREGAR ARCHIVO HTML Y JS

Extra: Cuando lo termines intenta hacer el mismo programa que se muestre en el explorador. se entrega en otro fichero con nombre distinto
*/

const nombre = prompt("Dime tu nombre: ");
// Se podría controlar el input del nombre con regEx

let edad = prompt("Dime tu edad: ");
let tag;

// Pequeño control de error en la edad. Mejorable con RegEx.
while (edad < 0 || edad > 200) {
    alert("Error en la edad introducida");
    edad = prompt("Dime tu edad: ");
}

// Asignación de tag según la edad
if (edad <= 12) {
    tag = "Niño";
} else if(edad > 12 && edad <= 17) {
    tag = "Adolescente";
} else if( edad > 17 && edad <= 64) {
    tag = "Trabajador";
} else {
    tag = "Jubilado"
}

// Mensaje final con toda la información
alert(`${nombre} tiene ${edad} años y por tanto es ${tag}`);

const texto = document.getElementById("texto");
texto.classList.add("textStyle");
texto.innerHTML = `${nombre} tiene ${edad} años y por tanto es ${tag}`;