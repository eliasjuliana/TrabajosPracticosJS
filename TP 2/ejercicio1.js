/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada 
no es un número válido indicarlo en un mensaje.*/

let edad;
edad = prompt('Escriba su edad');

if (isNaN(edad)) {
    console.log('El valor ingresado no es un numero valido');
} else if (!(edad > 18)) {
    console.log('Aun no puede conducir');
} else {
    console.log('Ya esta habilitado para conducir');
}
