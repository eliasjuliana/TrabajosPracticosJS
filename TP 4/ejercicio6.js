/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información 
relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
 */

import { generateISBN } from "./utils/utils.js";
//utilice una funcion (de chatGPT para generar el isbn, para practicar import y export)

class Libro {
    constructor(titulo, autor, numPaginas){
        this._titulo = titulo;
        this._autor = autor;
        this._numPaginas = numPaginas;
        this.isbn = generateISBN();
    }

    get titulo() {
        return this._titulo;
    }

    get autor() {
        return this._autor;
    }

    get numPaginas() {
        return this._numPaginas;
    }

    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo
    }

    set autor(nuevoAutor) {
        this._autor = nuevoAutor
    }

    set numPaginas(nuevoNumPaginas) {
        this._numPaginas = nuevoNumPaginas
    }

    mostrarLibro(){
        console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} paginas`)
    }
}

const libro1 = new Libro ('Harry Potter y el misterio del principe', 'J.K. Rowling', 602);
libro1.mostrarLibro();