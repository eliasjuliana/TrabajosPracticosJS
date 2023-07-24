// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// let texto = prompt('Ingrese un texto');

// let textoSeparado = texto.split('');
// let textoReverse = textoSeparado.reverse();
// let textoReverseUnido = textoReverse.join('');

// console.log(textoReverseUnido);



//________con bucle_______

let text = prompt('Ingrese un texto');

let textReverse = ''
for (let i = text.length; i >= 0; i-=1){

    letter = text.at(i);
    textReverse = textReverse + letter;
}

console.log(textReverse);