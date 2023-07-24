// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:
// Input: Hola mundo
// Output: la vocal ‘o’ está en la posición 1

let text = prompt('Ingrese un texto');
text = text.toLowerCase();

for (let i = 0; i < text.length; i+=1){
    let letra = text.at(i);

    if (letra === 'a' || 
        letra === 'e' ||
        letra === 'i' ||
        letra === 'o' ||
        letra === 'u' ) {

        console.log(`La vocal ${letra} esta en la posicion ${i}`);
        break;
        }   
}
