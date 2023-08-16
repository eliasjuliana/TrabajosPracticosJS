/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o 
con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */

import { generarTelefono } from "./utils/utils.js";



//________CLASES________
class Contacto {
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(tamanio){
        this.tamanio = tamanio || 10;
        this.contactos = [];
    }

    aniadirContacto(contacto){
        if (this.tamanio === this.contactos.length){
            console.log('No se pueden almacenar mas contactos');
            return;
        } 
        this.contactos.push(contacto);
        console.log(`Se aniadio el contacto ${contacto.nombre}`);
    }
    
    existeContacto(nombreContacto){
    const existe = this.contactos.find((item) => {
        return nombreContacto.toLowerCase() === item.nombre.toLowerCase();
        })

    if(existe){
        console.log(`El contacto ${nombreContacto} si existe`)
    } else {
        console.log(`El contacto ${nombreContacto} no existe`)
    }
    }

    listarContacto(){
        let lista = ''
        this.contactos.forEach((item)=>{
            lista += (`${item.nombre} : ${item.telefono} - `);
        })
        console.log(lista);
    }

    buscarContacto(nombre){
        const contacto = this.contactos.find((item) => {
            return item.nombre.toLowerCase() === nombre.toLowerCase();
        });
    
        if (!contacto) {
        console.log('No existe el contacto buscado');
        } else {
        console.log(`${contacto.nombre}: ${contacto.telefono}`);
        }
    }
    
    eliminarContacto(contactoAEliminar){
        const indiceContacto = this.contactos.findIndex((item) => contactoAEliminar === item.nombre);

        if(indiceContacto >= 0 && indiceContacto < this.contactos.length){
            this.contactos.splice(indiceContacto, 1);
            console.log(`El contacto ${contactoAEliminar} ha sido eliminado de la agenda`)
        } else {
            console.log(`El contacto ${contactoAEliminar} no ha sido eliminado de la agenda`)
        }
    }

    agendaLLena(){
        if(this.contactos.length === this.tamanio){
            console.log('La agenda esta llena')
        } else {
            console.log('La agenda aun tiene espacio')
        }
    }

    huecosLibres(){
        const numContactos = this.contactos.length;

        const espaciosLibres = this.tamanio - numContactos;
        
        if (espaciosLibres === 0) {
            console.log(`No quedan espacios libres en la agenda`)
        } else {
            console.log(`Quedan ${espaciosLibres} espacios libres en la agenda`)
        }
    }
}

//crear agenda
const nuevaAgenda = new Agenda(7);

//crear contacto

const crearContacto = () =>{
    const nombre = prompt ('Ingrese el nombre del contacto');
    let telefono = generarTelefono();

    const contacto = new Contacto(nombre, telefono);
    return contacto;
}


//______MENU______
while(true){
    const menu = prompt(
        `Menú de Agenda:
        1. Añadir contacto
        2. Verificar si existe el contacto
        3. Listar contactos
        4. Buscar contacto
        5. Eliminar contacto
        6. Verificar si la agenda esta completa
        7. Verificar si hay espacio en la agenda`
    )
    
    if (menu === null) {
        break;
    }
    
    switch(menu){
        case '1': {
            const contacto = crearContacto();
            nuevaAgenda.aniadirContacto(contacto);
            break;
        }
        case '2': {
            const nombreContacto = prompt('Ingrese el nombre del contacto que quiere verificar');
            nuevaAgenda.existeContacto(nombreContacto);
            break;
        }
        case '3': {
            nuevaAgenda.listarContacto();
            break;
        }
        case '4': {
            const nombre = prompt('Ingrese el nombre del contacto que quiere verificar');
            nuevaAgenda.buscarContacto(nombre);
            break;
        }
        case '5': {
            const contactoAEliminar = prompt('Ingrese el nombre del contacto que quiere eliminar');
            nuevaAgenda.eliminarContacto(contactoAEliminar);
            break;
        }
        case '6': {
            nuevaAgenda.agendaLLena();
            break;
        }
        case '7': {
            nuevaAgenda.huecosLibres();
            break;
        }
        default: {
            console.log('Introduzca un número válido');
            console.log("")
        }
    }
}
