/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular 
su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:
Input:
lado A = 24
lado B = 5

Output: 58
 */

let resultado = 0;
const perimetro = (a, b) => {
    resultado = 2*(a + b);
    return(resultado);
}

const lado1 = Number(prompt('Ingrese un lado del rectangulo'));
const lado2 = Number(prompt('Ingrese el otro lado del rectangulo'));

if(isNaN(lado1) || isNaN(lado2)){
    alert('Ingrese un numero valido');
} else {
    perimetro(lado1, lado2);
    console.log(`El perimetro del rectangulo es ${resultado}`);
}