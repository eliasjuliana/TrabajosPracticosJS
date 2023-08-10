import { Agenda, Contacto } from "./ejercicio7-classes.js";

const agenda = new Agenda(7);
const contacto1 = new Contacto ('Juliana');
const contacto2 = new Contacto ('Roberto');
const contacto3 = new Contacto ('Jose');
const contacto4 = new Contacto ('Sofia');
const contacto5 = new Contacto ('Pablo');
const contacto6 = new Contacto ('Ignacio');
const contacto7 = new Contacto ('Maria');
const contacto8 = new Contacto ('Luciana');

//ANIADIR CONTACTOS__________
agenda.aniadirContacto(contacto1);
agenda.aniadirContacto(contacto2);
agenda.aniadirContacto(contacto3);
agenda.aniadirContacto(contacto4);
agenda.aniadirContacto(contacto5);
agenda.aniadirContacto(contacto6);
agenda.aniadirContacto(contacto7);
agenda.aniadirContacto(contacto8);

//EXISTE CONTACTO__________

agenda.existeContacto('JULIANA');
agenda.existeContacto('pablo');


// //LISTAR CONTACTOS__________

// agenda.listarContacto();

// //BUSCAR CONTACTOS__________

// agenda.buscarContacto('roberto');

// //ELIMINAR CONTACTOS__________

// agenda.eliminarContacto('Roberto');

// //AGENDA LLENA_______
// agenda.agendaLLena();

// //HUECOS EN LA AGENDA________
// agenda.huecosLibres();



console.log(agenda);