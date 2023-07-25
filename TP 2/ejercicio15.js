// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let text = prompt('Ingrese un texto');
let cantidadVocales = 0;
let letra;

for(let i = 0; i < text.length; i+=1){
    letra = text.at(i).toLowerCase();
    

    if (letra === 'a' ||
    letra === 'e' ||
    letra === 'i' ||
    letra === 'o' ||
    letra === 'u' ||
    letra === 'á' ||
    letra === 'é' ||
    letra === 'í' ||
    letra === 'ó' ||
    letra === 'ú' )
    {
        cantidadVocales = cantidadVocales + 1
    } 
} console.log(cantidadVocales);
