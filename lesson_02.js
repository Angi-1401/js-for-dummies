/**
 * Functions with and without return.
 * 
 * Determine the result for each ´console.log´ statement for
 * the given functions.
 */

/**
 * Made with ❤️ by:
 * Alejandro González
 * Angélica Rivas
 * Herasi Silva
 */

function suma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(suma(10, 20)); // --> 30

function resta(numero1, numero2) {
  console.log(numero1 - numero2); // --> -10
}

console.log(resta(10, 20)); // --> Undefined

function hallarAreaTriangulo(base, altura) {
  if (base <= 0 || altura <= 0) {
    return "Los valores deben ser mayores a 0";
  } else if (base === altura) {
    return "La base y la altura no pueden ser iguales";
  } else {
    console.log((base * altura) / 2); // --> 25
  }
}

console.log(hallarAreaTriangulo(10, 5)); // --> Undefined

function hallarAreaCirculo(radio) {
  if (radio <= 0) {
    return "El radio debe ser mayor a 0";
  } else if (typeof radio !== "number") {
    return "El radio debe ser un número";
  } else {
    if (radio <= 5) {
      return "El radio debe ser mayor a 5";
    }
    console.log(3.14 * (radio * radio));
  }
}

console.log(hallarAreaCirculo(2)); // --> "El radio debe ser mayor a 5"

