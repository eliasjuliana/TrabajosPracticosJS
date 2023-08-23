/*4- Crear una web con un reloj que muestre la siguiente información:
fecha y hora */


const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']



const mostrarFecha = () => {
    const fechaActual = new Date();

    let dia = fechaActual.getDay();
    const fecha = fechaActual.getDate();
    let mes = fechaActual.getMonth();
    const anio = fechaActual.getFullYear();

    dia =dias[dia];
    mes = meses[mes];

    document.getElementById('date').innerText = `${dia} ${fecha} de ${mes} de ${anio}`;
}

mostrarFecha();

const mostrarHora = () =>{
    const fechaActual = new Date();
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();

    document.getElementById('hour').innerText = `${horas}:${minutos}:${segundos}`;
}

const reloj = setInterval(mostrarHora, 1000);
mostrarHora();


