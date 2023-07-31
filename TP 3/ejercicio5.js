/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que 
se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

const isUpperOrLowerCase = (text) =>{
    //validacion en caso que se ingrese un numero
    if (text === text.toLowerCase()){
        resultado = `La cadena de texto esta formada solo por minusculas`
    } else if (text === text.toUpperCase()){
        resultado = `La cadena de texto esta formada solo por mayusculas`
    } else {
        resultado = `La cadena de texto esta formada por mayusculas y minusculas`
    }
    return(resultado);
}

let text = prompt('Ingrese un texto');

if (isNaN(Number(text))){
    isUpperOrLowerCase(text);
    console.log(resultado);
} else {
    alert('Ingrese un texto valido')
}