/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: (dinero) => {
    console.log(`Usted ingreso $${dinero}`)
    cuenta.saldo +=dinero;
  },
  extraer: (dinero) => {

    console.log(`Usted extrajo $${dinero}`)
    cuenta.saldo = cuenta.saldo - dinero;
  },
  informar: () => {
    console.log(`El saldo disponible es $${cuenta.saldo}`);
  },
};



while(true){
  const transaccion = prompt(
    `1. Ingresar dinero
     2. Extraer dinero
     3. Consultar saldo`
  )

  if(transaccion === null){
    break;
  }

  switch(transaccion){
    case '1': {
      const dinero = Number(prompt('Monto a ingresar'));
      if(dinero === null || isNaN(dinero) || dinero < 0){
        alert('Ingrese un monto valido')
      } else {
        cuenta.ingresar(dinero);
      }
      break;
    }
    case '2': {
      dinero = Number(prompt('Monto a extraer'));
      if(dinero === null || isNaN(dinero) || dinero < 0){
        alert('Ingrese un monto valido')
      } else{
        if(cuenta.saldo < dinero){
          alert ('No tiene dinero suficiente')
        } else {
          cuenta.extraer(dinero);
        }
      }
      break;
    }
    case '3': {
      cuenta.informar();
      break;
    }
    default:{
      alert('Seleccione una transaccion valida')
      break;
    }
  }
}





