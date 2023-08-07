/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra 
puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico 
de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

 */

class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
        this.dni = this.generarDNI();
    }

    mostrarGeneracion() {
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            console.log(`${this.nombre} pertenece a la Silent Generation y su rasgo caracteristico es la austeridad`);
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            console.log(`${this.nombre} pertenece a la generacion Baby Boom y su rasgo caracteristico es la ambicion`);
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            console.log(`${this.nombre} pertenece a la Generacion X y su rasgo caracteristico es la obsesion por el exito`);
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            console.log(`${this.nombre} pertenece a la Generacion Y o Millenial y su rasgo caracteristico es la frustracion`);
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            console.log(`${this.nombre} pertenece a la Generacion Z y su rasgo caracteristico es la irreverencia`);
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`);
        } else {
            console.log(`${this.nombre} no es mayor de edad`);
        }
    }

    generarDNI() {
        let dni = parseInt(Math.random() * 10e7);
        return dni;
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}
    Edad: ${this.edad}
    Sexo: ${this.sexo}
    DNI: ${this.dni}
    Peso: ${this.peso} kg
    Altura: ${this.altura} m
    Anio de nacimiento: ${this.anioNacimiento}`);
    }
}

let persona1 = new Persona("Juana", 32, "mujer", 60, 1.65, 1991);

persona1.mostrarDatos();
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.generarDNI();
