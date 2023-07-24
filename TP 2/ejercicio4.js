/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir 
pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let num;
let suma = 0;

while(true){
    num = prompt('Escriba un numero');

    if (isNaN(num)){
        alert('El valor ingresado no es un numero');
        continue;
    } else if (num === null) {
        break;
    }
    suma = suma + Number(num);
    }
console.log(suma);
