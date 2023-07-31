/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser 
realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

const tablaMultiplicar = (num) => {
    for(let i = 0; i <=10; i+=1){
        let tabla = num * i;
        console.log(tabla);
    }
}

num = prompt('Ingrese un numero');
if(isNaN(Number(num))){
    alert('Ingrese un numero valido')
} else {
    tablaMultiplicar(num);
}

