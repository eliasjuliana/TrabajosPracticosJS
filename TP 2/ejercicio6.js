/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
 */

let piramide;

for (let i = 1; i < 31; i+=1) {
    piramide = i;
    piramide = piramide.toString();
    piramide = (piramide.repeat(i));
    console.log(piramide);
}

