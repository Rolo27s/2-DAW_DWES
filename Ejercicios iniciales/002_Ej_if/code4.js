/* 
Ejercicio 4
Escribe un programa en JavaScript que determine el estado de un pedido en una tienda en línea. El usuario deberá ingresar el estado del pedido (pendiente, en proceso o entregado) y, dependiendo del estado, el programa mostrará un mensaje indicando el estado actual y proporcionará información adicional si el pedido está pendiente.
*/

alert("Soy el cuarto problema");

function setNEj4(numEj) {
    const regEx4 = /^[012]$/;
    
    let ej4 = prompt(numEj + ") .Ingresa un estado:\n\t0 : pendiente\n\t1 : en proceso\n\t2 : entregado");
    
    if (regEx4.test(ej4)) alert(`numero introducido = ${ej4}. Es válido.`);
    
    while (!regEx4.test(ej4)) {
        alert(`${ej4}. NO es válido.`);
        ej4 = prompt(numEj + ") .Ingresa un estado:\n\t0 : pendiente\n\t1 : en proceso\n\t2 : entregado");
        if (regEx4.test(ej4)) alert(`numero introducido = ${ej4}. Es válido.`);
    }

    return ej4;
}

let solution4 = setNEj4(4);

switch(parseInt(solution4)) {
    case 0:
        alert("Estado pendiente");
        break;
    case 1:
        alert("Estado en proceso");
        break;
    case 2:
        alert("Estado entregado");
        break;
    default:
        alert("Valor no reconocido.");
}