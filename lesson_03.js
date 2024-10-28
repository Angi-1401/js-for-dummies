/**
 * Recursivity
 * 
 * 1. Make a function that prints the power of a given number.
 * 2. Make a function that prints the factorial of a given number.
 * 3. Make a function that prints the Fibonacci Sucession until reach.
 * a given number.
 */

/**
 * Made with ❤️ and tears by: 
 * Angélica Rivas
 * Gianmario Sosa
 * Herasi Silva
 * José Rodríguez 
 */


/**
 * Validate numbers
 */
const msg = "What kind of thing are you tryng to put in the function? You, monster..."

function isNumber(input) {
  if (typeof (input) !== "number") return false
  else return true
};


/**
 * Power of a number
 */
function power(x, y) {
  if ((isNumber(x) == true) && (isNumber(y) == true)) {
    if (y === 0) {
      return 1;
    } else {
      return x * power(x, y - 1);
    };
  } else return msg;
};

console.log("Power: " + power(2, 5)); // Expected result: 32


/**
 * Factorials
 */
function factorial(n) {
  if (isNumber(n) == true) {
    if ((n === 0) || (n === 1)) {
      return 1;
    } else {
      return n * factorial(n - 1)
    };
  } else return msg;
};

console.log("Factorial: " + factorial(6)) // Expected result: 720


/**
 * Fibonacci
 * Fn = Fn-1 + Fn-2 ...
 */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  else {
    return fibonacci(n - 1) + fibonacci(n - 2) // cosorro
  };
};

function printFibonacci(n, current_n = 0) {
  if (isNumber(n) == true) {
    if (current_n == n + 1) return;
    else {
      console.log("Fibonacci (Iteration No. " + current_n + "): " + fibonacci(current_n))
      printFibonacci(n, current_n + 1)
    };
  } else return msg;
};

// Expected result: 0… 1… 2… 3… 5… 8… 13… 21… 34… 55… 89… 144…
// Current result: 0… 1… 2… 3… 5… 8… 13… 21… 34… 55… 89… 144… Undefined ... Pls, forgive us
console.log(printFibonacci(12))