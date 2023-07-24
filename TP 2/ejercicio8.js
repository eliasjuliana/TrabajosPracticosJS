/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
 */

let number;
number = prompt('Ingrese un numero');

if (number <= 50) {
    let j = "";
    for (let i = 1; i <= number; i+=1){
        j = j + i.toString();
        console.log(j);
    }

} else {
    console.log('Ingrese un numero menor a 50')
}
