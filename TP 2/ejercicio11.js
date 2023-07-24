// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let nombre1 = prompt("Ingrese su nombre");
let edad1 = prompt('Ingrese su edad');

let nombre2 = prompt("Ingrese su nombre");
let edad2 = prompt('Ingrese su edad');

let nombre3 = prompt("Ingrese su nombre");
let edad3 = prompt('Ingrese su edad');

edad1 = Number(edad1);
edad2 = Number(edad2);
edad3 = Number(edad3);


if (Math.max(edad1, edad2, edad3) === edad1) {
    console.log(`El mayor es ${nombre1}`);
} else if ((Math.max(edad1, edad2, edad3) === edad2)){
    console.log(`El mayor es ${nombre2}`);
} else if ((Math.max(edad1, edad2, edad3) === edad3)){
    console.log(`El mayor es ${nombre3}`);
}


//no inclui los casos en que dos o las tres edades sean iguales