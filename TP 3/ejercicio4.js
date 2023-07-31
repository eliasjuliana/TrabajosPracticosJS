/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto 
que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */


const esPar = (num) => {
    if (num % 2 === 0) {
        resultado =  (`El numero ${num} es par`);
    } else {
        resultado = (`El numero ${num} es impar`);
    }
    return(resultado)
}

const num = parseInt(prompt('Ingrese un numero'));

if (isNaN(num)){
    alert('Ingrese un numero valido')
} else {
    const resultado = esPar(num);
    console.log(resultado);
}