/**
 * Array Methods
 * 
 * 1. Make a function that receive an array of numbers and returns the sum of it.
 * 2. Make a function that receive an array of numbers and returns the average ot it.
 * 3. Make a function that receive an array of numbers and returns the largest one.
 * 4. Make a function that receive an array of numbers and returns the smallest one.
 * 5. Make a function that receive an array of numbers and returns the even ones.
 * 6. Make a function that receive an array of numbers and returns the odd ones.
 * 7. Make a function that receive an array of cities and returns the ones who
 * starts with M.
 * 8. Make a function that receive and array of names, verifies if "Juan" is in it, and
 * if so, returns it's position.
 */

/**
 * Made with ❤️ by:
 * Alejandro Aguilar
 * Angélica Rivas
 * Camila Castillo
 * Herasi Silva
 */

let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let city_array = ["Madrid", "Buenos Aires", "Ciudad de México", "Lima", "Mérida"];
let name_array = ["Pepito", "José", "Juan", "José"];

// 1
let sum = 0;
num_array.forEach(element => { sum += element });
console.log(sum);

// 2
let length = num_array.length;
console.log(sum / length);

// 3
let sorted_array = num_array.sort();
let largest_element = sorted_array[sorted_array.length - 1];
console.log(largest_element);

// 4
let smaller_element = sorted_array[0];
console.log(smaller_element);

// 5
let even_array = [];
num_array.forEach(element => {
  if (element % 2 == 0) {
    even_array.push(element);
  };
});
console.log(even_array);

// 6
let odd_array = [];
num_array.forEach(element => {
  if (element % 2 != 0) {
    odd_array.push(element);
  };
});
console.log(odd_array);

// 7
console.log(city_array.filter(element => element.startsWith("M")));

// 8
console.log(name_array.indexOf("Juan"));