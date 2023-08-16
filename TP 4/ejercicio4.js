/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además 
del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
    constructor (codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimirDatos () {
        console.log(`El código del producto ${this.nombre} es ${this.codigo} y cuesta ${this.precio} dolares`);
    }
}

let producto1 = new Producto('A345', 'iPad Air', 699);
let producto2 = new Producto('A12145', 'iPhone 14 Pro', 1100);
let producto3 = new Producto('A988', 'MacBook Pro', 2200);

let carrito = [];
carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);

console.log(carrito);


carrito.forEach( (producto) => {
    producto.imprimirDatos();
}
)