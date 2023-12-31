/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821 
Output: ‘L’*/

/* 1. ingresar dni
    2. verificar si es un numero, si no alert 
    3. continuar pidiendo numeros
    4. calcular resto = dni%23 
    5. comparar el valor de resto con las letras
    6.devolver el valor de la letra
*/
const letras = "TRWAGMYFPDXBNJZSQVHLCKET";

while(true){
    let num  = prompt('Ingrese su numero de documento');

    if(num === null){
    //cancelar - salir
    break;
    }
    
    let numInt = Number(num)
    
    //verificar rango y que sea un numero
    if (isNaN(num) || num < 0 || num > 99999999){
        alert('Ingrese un numero valido');
        continue;
    }
    
    let resto = numInt % 23; //numero que va desde el 0 al 22(es algo matematico)
    const letraDNI = letras.charAt(resto);
    alert(`La letra para el DNI ${num} es ${letraDNI}`);
}
