/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar(){
        console.log(`Hola ${this.nombre}`)
    }

    despedirse(){
        console.log(`Chau ${this.nombre}`)
    }
}

const persona1 = new Persona('Juliana', 32, 'Biotecnologa');
const persona2 = new Persona('Ana', 40, 'Programadora');

persona1.saludar();
persona2.despedirse();
