/* 
Ejercicio 2

Escribe un programa en JavaScript que determine si un número ingresado por el usuario es par o impar. El usuario deberá ingresar un número, y el programa mostrará un mensaje indicando si el número es par o impar.
*/

import { setN } from './code1.js';

let ej2 = setN(2);

if (ej2 % 2 === 0) {
    alert("El número introducido era par")
} else {
    alert("El número introducido era impar")
}