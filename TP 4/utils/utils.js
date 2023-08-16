export const generateISBN = () => {
    let isbn = '978'; // Los primeros tres dígitos suelen ser 978 para ISBN-13
    for (let i = 0; i < 9; i++) {
      isbn += Math.floor(Math.random() * 10); // Agregar dígitos aleatorios
    }
  
    // Calcular el dígito de control
    let sum = 0;
    for (let i = 0; i < isbn.length; i++) {
      let digit = parseInt(isbn[i]);
      sum += (i % 2 === 0) ? digit : digit * 3;
    }
    let checkDigit = (10 - (sum % 10)) % 10;
  
    isbn += checkDigit;
  
    return isbn;
  }

export const generarTelefono = () => {
  let telefono = Math.floor(Math.random() * 10e6);
  return telefono;
}