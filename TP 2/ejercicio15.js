// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let text = prompt('Ingrese un texto');
let cantidadVocales = 0;

for(let i = 0; i < text.length; i+=1){
    letra = text.at(i).toLowerCase();
    

    if (text.at(i) === 'a' ||
    text.at(i) === 'e' ||
    text.at(i) === 'i' ||
    text.at(i) === 'o' ||
    text.at(i) === 'u' ||
    text.at(i) === 'á' ||
    text.at(i) === 'é' ||
    text.at(i) === 'í' ||
    text.at(i) === 'ó' ||
    text.at(i) === 'ú' )
    {
        cantidadVocales = cantidadVocales + 1
    } 
} console.log(cantidadVocales);
