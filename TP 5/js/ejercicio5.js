/*5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
*/

/*1. Selecciono elementos */

const iniciar = document.getElementById('btn-iniciar');
const pausar = document.getElementById('btn-pausar');
const reiniciar = document.getElementById('btn-reiniciar');

/*2. Creo funciones*/
//Mostrar y ocultar botones

const ocultarBoton = (elemento) =>{
    elemento.style.display = 'none'
}

const mostratBoton = (elemento) =>{
    elemento.style.display = ''
}

//iniciar, pausa y reiniciar

const iniciarCronometro = () =>{

    setInterval()

    let horas = '00';
    let minutos = '00';
    let segundos = '00';
    let miliseg = '00';

    document.getElementById('reloj').innerText = `${horas}:${minutos}:${segundos}:${miliseg}`;
}

const cronometro = setInterval(iniciarCronometro, 1);
iniciarCronometro();

// const pausarCronometro = () =>{
//     clearInterval(cronometro);
// }

// const reiniciarCronometro = () =>{
//     const cronometro = setInterval(iniciarCronometro, 1);
//     mostrarCronometro();
// }



/*3. Event listener */
// iniciar.addEventListener('click', iniciarCronometro);

// pausar.addEventListener('click', pausarCronometro);

// reiniciar.addEventListener('click', reiniciarCronometro);



