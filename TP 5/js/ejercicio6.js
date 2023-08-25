"use-strict"

/*6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. 
Debe contener los botones, iniciar, pausar y reset.  */

/**Declaro constantes y selecciono elementos del DOM */
const horasInput = document.getElementById('input-horas');
const minutosInput = document.getElementById('input-min');
const segundosInput = document.getElementById('input-seg');


const mostrarTemporizador = document.getElementById('temporizador');
const btnIniciar = document.getElementById('btn-iniciar');
const btnPausar = document.getElementById('btn-pausar');
const btnReiniciar = document.getElementById('btn-reiniciar');
const btnReanudar = document.getElementById('btn-reanudar');

let tiempoEnSegundos = 0;
let tiempoRestante = 0;
let temporizador;


/**Creo funciones */

/**Mostrar/Ocultar Botones */
const ocultarBoton = (elemento) =>{
    elemento.classList.add('ocultar');
}

const mostrarBoton = (elemento) =>{
    elemento.classList.remove('ocultar');
}

/**Pausar, Reiniciar, Reanudar, Iniciar temporizador */
const iniciarTemporizador = () => {

    let horas = parseInt(horasInput.value);
    let minutos = parseInt(minutosInput.value);
    let segundos = parseInt(segundosInput.value); 

    //si no ingreso valor en horas,minutos o segundos lo convierto a 0
    if(isNaN(horas)){
        horas = 0
    }

    if(isNaN(minutos)){
        minutos = 0
    }

    if(isNaN(segundos)){
        segundos = 0
    }

    tiempoEnSegundos = (horas > 0 ? (horas*3600) : 0) + (minutos > 0? (minutos*60) : 0) + segundos;

    if (tiempoEnSegundos >= 0) {
        actualizarTemporizador();
        temporizador = setInterval(() => {
            tiempoEnSegundos-=1;
            if (tiempoEnSegundos < 0) {
                clearInterval(temporizador);
                mostrarTemporizador.textContent = 'Tiempo finalizado';
            } else {
                actualizarTemporizador();
            }
        }, 1000);

        btnIniciar.disabled = true;
    }

    ocultarBoton(btnIniciar);
    mostrarBoton(btnPausar);
}

const actualizarTemporizador= () => {
    const horas = Math.floor(tiempoEnSegundos / 3600);
    const minutos = Math.floor((tiempoEnSegundos % 3600) / 60);
    const segundos = tiempoEnSegundos % 60;

    const formatoTiempo = `${(horas < 10 ? '0' + horas : horas)}:${(minutos < 10 ? '0' + minutos : minutos)}:${(segundos < 10 ? '0' + segundos : segundos)}`;
    mostrarTemporizador.textContent = formatoTiempo;
}

const pausarTemporizador = () => {
    clearInterval(temporizador);
    tiempoRestante = tiempoEnSegundos;
    ocultarBoton(btnPausar);
    mostrarBoton(btnReanudar);
}

const reanudarTemporizador = () => {
    if (tiempoRestante >= 0) {
        actualizarTemporizador();
        temporizador = setInterval(() => {
            tiempoEnSegundos-=1;
            if (tiempoEnSegundos < 0) {
                clearInterval(temporizador);
                mostrarTemporizador.textContent = 'Tiempo finalizado';
            } else {
                actualizarTemporizador();
            }
        }, 1000);

        btnIniciar.disabled = true;
    }

    ocultarBoton(btnIniciar);
    mostrarBoton(btnPausar);
    ocultarBoton(btnIniciar);
    ocultarBoton(btnReanudar);
    mostrarBoton(btnPausar);
}

const reiniciarTemporizador = () => {
    clearInterval(temporizador);
    tiempoEnSegundos = 0;

    horasInput.value = ('placeholder');
    minutosInput.value = ('placeholder');
    segundosInput.value = ('placeholder'); 

    document.getElementById('temporizador').innerText = '00:00:00';
    ocultarBoton(btnPausar);
    ocultarBoton(btnReanudar);
    mostrarBoton(btnIniciar);
}


/**Event listeners */

btnIniciar.addEventListener('click', iniciarTemporizador);
btnPausar.addEventListener('click', pausarTemporizador);
btnReiniciar.addEventListener('click', reiniciarTemporizador);
btnReanudar.addEventListener('click', reanudarTemporizador);






