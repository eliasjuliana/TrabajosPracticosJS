/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario 
selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


// const ciudades = ['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japón', 'Londres, Reino Unido', 'Roma, Italia', 
// 'Pekín, China', 'Río de Janeiro, Brasil', 'Ámsterdam, Países Bajos', 'Sídney, Australia', 'El Cairo, Egipto']
 */




const ciudades = [];

while(true){
    let ciudad = prompt('Ingrese una ciudad');
    if(ciudad === null){
        break;
    } else {
    ciudades.push(ciudad);
    }
}

console.log(ciudades);

console.log(`El arreglo de ciudades tiene ${ciudades.length} elementos`);
console.log(`La ciudad que ocupa la primera posicion es ${ciudades[0]}`);
console.log(`La ciudad que ocupa la tercera posicion es ${ciudades[2]}`);
console.log(`La ciudad que ocupa la ultima posicion es ${ciudades[(ciudades.length)-1]}`);

ciudades.push('Paris, Francia');
console.log(ciudades);

console.log(`La ciudad que ocupa la segunda posicion es ${ciudades[1]}`);

ciudades[1] = 'Barcelona';
console.log(ciudades);

