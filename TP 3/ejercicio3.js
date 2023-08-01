/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios 
entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número 
de apariciones de dicha suma, repitiendo 50 veces esta operación. */

const suma = [2,3,4,5,6,7,8,9,10,11,12];
const apariciones = [0,0,0,0,0,0,0,0,0,0,0];

for(let i = 0; i<50; i+=1){
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    let suma = dado1 + dado2;

    if (suma === 2){
    apariciones[0] +=1;
    } else if (suma === 3){
        apariciones[1] +=1;
    } else if (suma === 4){
        apariciones[2] +=1;
    } else if (suma === 5){
        apariciones[3] +=1;
    } else if (suma === 6){
        apariciones[4] +=1;
    } else if (suma === 7){
        apariciones[5] +=1;
    } else if (suma === 8){
        apariciones[6] +=1;
    } else if (suma === 9){
        apariciones[7] +=1;
    } else if (suma === 10){
        apariciones[8] +=1;
    } else if (suma === 11){
        apariciones[9] +=1;
    } else if (suma === 12){
        apariciones[10] +=1;
    }
}


//tabla con resultados de la suma y sus frecuencias
console.log('suma apariciones')
for(let i = 0; i < suma.length; i+=1){
    console.log(suma[i], apariciones[i]);
}



//__________VARIANTE CON SWITCH__________

// const suma = [2,3,4,5,6,7,8,9,10,11,12];
// const apariciones = [0,0,0,0,0,0,0,0,0,0,0];

// for(let i = 0; i<50; i+=1){
//     const dado1 = Math.floor(Math.random() * 6) + 1;
//     const dado2 = Math.floor(Math.random() * 6) + 1;

//     let suma = dado1 + dado2;
    
//     switch (suma) {
//     case 2:
//         apariciones[0] +=1;
//         break;
//     case 3:
//         apariciones[1] +=1;
//         break;
//     case 4:
//         apariciones[2] +=1;
//         break;
//     case 5:
//         apariciones[3] +=1;
//         break;
//     case 6:
//         apariciones[4] +=1;
//         break;
//     case 7:
//         apariciones[5] +=1;
//         break;
//     case 8:
//         apariciones[6] +=1;
//         break;
//     case 9:
//         apariciones[7] +=1;
//         break;
//     case 10:
//         apariciones[8] +=1;
//         break; 
//     case 11:
//         apariciones[9] +=1;
//         break;
//     case 11:
//         apariciones[10] +=1;
//         break; 
//     default:
//          console.log('Tire los dados nuevamente')
//     }
// }

// console.log(suma);
// console.log(apariciones);

// console.log('suma apariciones')
// for(let i = 0; i < suma.length; i+=1){
//     console.log(suma[i], apariciones[i]);
// }




