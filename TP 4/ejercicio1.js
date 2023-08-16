/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender(); auto encendido
objeto.apadar() El auto se apagó
 */

const auto = {
  color: "gris",
  marca: "Volkswagen",
  modelo: "T-cross",
  motor: false,
  encender: () => {
    this.motor = true;
  },
  apagar: () => {
    this.motor = false;
  },
};

console.log('Estado del auto: '+((auto.motor)?'Encendido':'Apagado'));

console.log(auto);
console.log(auto.marca);
auto.encender();
auto.apagar();
