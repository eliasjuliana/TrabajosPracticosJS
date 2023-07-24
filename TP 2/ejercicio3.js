/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las 
cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let text;
let string = ''


while(true) {
    text = prompt('Ingrese un texto');
    if (text === null) {
        break;
    }  

    string = `${string} - ${text}`;
}
console.log(string);