"use strict"
/*5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
*/

// /*1. Selecciono elementos */

const btnIniciar = document.getElementById('btn-iniciar');
const btnPausar = document.getElementById('btn-pausar');
const btnReiniciar = document.getElementById('btn-reiniciar');

//declaro variables
let horas = 0;
let minutos = 0;
let segundos = 0;
let miliseg = 0;

let reloj = `00:00:00.00`;

let cronometro;



// //Mostrar y ocultar botones

const ocultarBoton = (elemento) =>{
    elemento.classList.add('ocultar');
}

const mostrarBoton = (elemento) =>{
    elemento.classList.remove('ocultar');
}

//creo funciones iniciar, pausar y reiniciar
const iniciarCron = () => {
    cronometro = setInterval( tiempo, 10);
    ocultarBoton(btnIniciar);
    mostrarBoton(btnPausar);
}


const pausarCron = () => {
    clearInterval(cronometro);
    ocultarBoton(btnPausar);
    mostrarBoton(btnIniciar);

}


const reiniciarCron = () => {
    clearInterval(cronometro);
    horas = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById('reloj').innerText = '00:00:00.00';
}

//funcion tiempo que va aumentando los segundos, minutos y horas del cronometro
const tiempo = () => {

    miliseg += 10; // Incrementa los milisegundos en 10

    if (miliseg === 1000) {
        miliseg = 0;
        segundos += 1; // Incrementa los segundos

        if (segundos === 60) {
            segundos = 0; //Vuelvo a 0 los segundos
            minutos+=1; //Incrementa los minutos

            if (minutos === 60) {
                minutos = 0;
                horas+=1;//Incrementa las horas
            }
        }
    }

    //agrego ceros si hace falta
    const agregarCeros = `${(horas < 10 ? '0' + horas : horas)} : ${(minutos < 10 ? '0' + minutos : minutos)}:${(segundos < 10 ? '0' + segundos : segundos)}.${miliseg.toString().padStart(3, '0')}`;

    document.getElementById('reloj').innerText = agregarCeros;

    //Retorna o valor tratado
    return agregarCeros;
}




/*3. Event listener */
btnIniciar.addEventListener('click', iniciarCron);

btnPausar.addEventListener('click', pausarCron);

btnReiniciar.addEventListener('click', reiniciarCron);


// //iniciar, pausa y reiniciar

// const iniciarCronometro = () =>{

//     setInterval()

//     let horas = '00';
//     let minutos = '00';
//     let segundos = '00';
//     let miliseg = '00';

//     document.getElementById('reloj').innerText = `${horas}:${minutos}:${segundos}:${miliseg}`;
// }

// const cronometro = setInterval(iniciarCronometro, 1);
// iniciarCronometro();

// const pausarCronometro = () =>{
//     clearInterval(cronometro);
// }

// const reiniciarCronometro = () =>{
//     const cronometro = setInterval(iniciarCronometro, 1);
//     mostrarCronometro();
// }
