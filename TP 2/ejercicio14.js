// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


let text = prompt('Ingrese un texto');

let result = ''
for (let i = 0; i < text.length; i+=1){

    result = result + text.at(i);

    if (i !== (text.length - 1)){
        result = result + '-';        
    }
} 
console.log(result);
