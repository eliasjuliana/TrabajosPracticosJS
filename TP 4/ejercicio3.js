/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios 
para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarAlto (alto2) {
    this.alto = alto2
  }

  modificarAncho (ancho2) {
    this.ancho = ancho2
  }

  propiedades (){
    console.log(`El rectangulo tiene ${this.alto} cm de alto y ${this.ancho} cm de ancho`)
  }

  perimetro() {
    console.log(`El perimetro del rectangulo es ${this.alto * 2 + this.ancho * 2} cm`);
  }

  area() {
    console.log(`El area del rectangulo es ${this.alto * this.ancho} cm2`);
  }
}

//nueva instancia
let rectangulo1 = new Rectangulo(3, 4);
console.log(rectangulo1);
rectangulo1.perimetro();
rectangulo1.area();

//modificacion de propiedades del rectangulo
rectangulo1.modificarAlto(8);
rectangulo1.modificarAncho(5);

console.log(rectangulo1);
rectangulo1.perimetro();
rectangulo1.area();
