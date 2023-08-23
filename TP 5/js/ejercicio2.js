/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad 
extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo 
característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un 
formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función 
correspondiente.
 */

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }

    mostrarGeneracion () {
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            alert(`${this.nombre} pertenece a la Silent Generation y su rasgo caracteristico es la austeridad`);
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            alert(`${this.nombre} pertenece a la generacion Baby Boom y su rasgo caracteristico es la ambicion`);
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            alert(`${this.nombre} pertenece a la Generacion X y su rasgo caracteristico es la obsesion por el exito`);
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            alert(`${this.nombre} pertenece a la Generacion Y o Millenial y su rasgo caracteristico es la frustracion`);
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            alert(`${this.nombre} pertenece a la Generacion Z y su rasgo caracteristico es la irreverencia`);
        }
    }

    esMayorDeEdad (){
        if (this.edad >= 18) {
            alert(`${this.nombre} es mayor de edad`);
        } else {
            alert(`${this.nombre} no es mayor de edad`);
        }
    }

    mostrarDatos(){
        alert(`Nombre: ${this.nombre}
        Edad: ${this.edad}
        Sexo: ${this.sexo}
        DNI: ${this.dni}
        Peso: ${this.peso} kg
        Altura: ${this.altura} m
        Anio de nacimiento: ${this.anioNacimiento}`);
    }
}

//selecciono los datos ingresados en el form y los guardo en variables
const nombreIngresado = document.getElementById('nombre_form');
const edadIngresado = document.getElementById('edad_form');
const sexoIngresado = document.getElementById('sexo_form');
const dniIngresado = document.getElementById('dni_form');
const pesoIngresado = document.getElementById('peso_form');
const alturaIngresado = document.getElementById('altura_form');
const anioNacimientoIngresado = document.getElementById('anio-nacimiento_form');


const enviar = document.getElementById('btn_enviar');
const generacion = document.getElementById('btn_generacion');
const mayoriaDeEdad = document.getElementById('btn_edad');

const mostrarDatosPersona = () => {
    let persona1 = new Persona (nombreIngresado.value, edadIngresado.value, sexoIngresado.value, dniIngresado.value, pesoIngresado.value, alturaIngresado.value, anioNacimientoIngresado.value)
    persona1.mostrarDatos()
}

const mostrarGeneracionPersona = () => {
    let persona1 = new Persona (nombreIngresado.value, edadIngresado.value, sexoIngresado.value, dniIngresado.value, pesoIngresado.value, alturaIngresado.value, anioNacimientoIngresado.value)
    persona1.mostrarGeneracion()
}

const mayoriaEdadPersona = () => {
    let persona1 = new Persona (nombreIngresado.value, edadIngresado.value, sexoIngresado.value, dniIngresado.value, pesoIngresado.value, alturaIngresado.value, anioNacimientoIngresado.value)
    persona1.esMayorDeEdad()
}

enviar.addEventListener('click', mostrarDatosPersona);
generacion.addEventListener('click', mostrarGeneracionPersona);
mayoriaDeEdad.addEventListener('click', mayoriaEdadPersona);