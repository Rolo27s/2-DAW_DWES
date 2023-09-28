/* 
Ejercicio 1
Escribe un programa en JavaScript que determine si un número es positivo, negativo o igual a cero. El usuario deberá ingresar un número, y el programa mostrará un mensaje indicando si el número es positivo, negativo o igual a cero. 

Solicitamos al usuario que ingrese un número utilizando la función prompt

*/

/* Explicación de la regEx:
Las barras de inicio y fin es para delimitar el scope
^ es el inicio de la regEx
-? es que es posible un numero negativo
$ es el final de la regEx
\d es cualquier dígito del 0 al 9
+ permite que haya uno o más dígitos
Entre paréntesis la parte (\.\d+)? es un grupo opcional completo con esa sintaxis
*/

//numEj será el número del ejercicio. Así podemos diferenciar mejor entre 1, 2, 3...
export function setN(numEj) {
    const regEx1 = new RegExp(/^-?\d+(\.\d+)?$/);
    
    let ej1 = prompt(numEj + ") .Ingresa un número");
    
    if (regEx1.test(ej1)) alert(`numero introducido = ${ej1}. Es válido.`);
    
    while (!regEx1.test(ej1)) {
        alert(`${ej1}. NO es válido.`);
        ej1 = prompt(numEj + ") .Ingresa un número");
        if (regEx1.test(ej1)) alert(`numero introducido = ${ej1}. Es válido.`);
    }

    return ej1;
}

setN(1);
