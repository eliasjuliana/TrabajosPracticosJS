/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número 
consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

let fila = prompt('Ingrese un numero de fila');
let columna = prompt('Ingrese un numero de columna');


let inicio;
inicio = fila*columna 

for (let i=0; i < fila; i+=1){

        let tabla = "";
        let num = inicio;

        for (let j = 0; j < columna; j+=1){
                tabla = tabla + num;
                num -=1;
        } 
        console.log(tabla);
        inicio = inicio - columna;
}
