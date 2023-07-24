/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : 
(suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */


let num;
num = prompt('Ingrese un numero');
//obtengo un numero pero como string

//quiero ver si ese numero es menor a 50, lo convierto a number primero y evaluo
let i = Number(num);

if (i <=50) {
    while (i >= 1) {
        //convierto de nuevo a string para poder repetirlo
    numString = i.toString();
    console.log(numString.repeat(i));
    i-=1;
    }
} else {
    console.log('Ingrese un numero menor a 50')
}
