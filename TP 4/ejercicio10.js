/*10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, 
el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información 
en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el 
cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que 
el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 
aviones al aeropuerto, buscar un avión y usar el método abordar.

 */

class Aeropuerto{
    constructor(nombreAeropuerto){
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
    }

    agregarAvion(avion){
    this.listaAviones.push(avion)
    }

    buscarAvion(nombreAvion){
        const busqueda = this.listaAviones.find((item)=>{
        return (nombreAvion.toLowerCase() === item.nombre.toLowerCase());
        }
        )
        
        if (busqueda){
            console.log(`El avion ${nombreAvion} tiene una capacidad de ${busqueda.capacidad} personas y se dirige a ${busqueda.destino}`)
        } else {
            console.log(`No se encontro el avion ${nombreAvion}`)
        }
    }
}


class Aviones{
    constructor(nombre, capacidad, destino){
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaPasajeros = [];
    }

    abordar(pasajero){
        if(this.listaPasajeros.length < this.capacidad){
            this.listaPasajeros.push(pasajero);
        } else {
            console.log(`El avion esta lleno, no puede abordar`)
        }
    }
}

const aeropuertoInternacional = new Aeropuerto('JFK')

const avion1 = new Aviones('Airbus A380', 350, 'Londres');
const avion2 = new Aviones('Boeing 737', 120, 'Buenos Aires');
const avion3 = new Aviones('Embraer', 50, 'Chicago');

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

console.log(aeropuertoInternacional);


aeropuertoInternacional.buscarAvion('boeing 737');
aeropuertoInternacional.buscarAvion('Boeing 747');

avion3.abordar('Juliana');
avion3.abordar('Martin');
avion3.abordar('Sofia');
avion3.abordar('Pilar');

console.log(avion3.listaPasajeros);



