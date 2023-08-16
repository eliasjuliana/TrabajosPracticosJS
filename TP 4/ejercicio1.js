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
  encenderAuto: () => {
    auto.motor = true;
    console.log('El auto esta encendido');
  },
  apagarAuto: () => {
    auto.motor = false;
    console.log('El auto esta apagado');
  },
};



console.log(auto);
console.log(auto.color);
console.log(auto.marca);
console.log(auto.modelo);

auto.encenderAuto();
auto.apagarAuto();

