/**
 * Simple scripts
 * 
 * 1. Make a calculator.
 * 2. Make a script that print the corresponding weekday for a given number.
 */

/**
 * Calculator script
 */

let x = 22
let y = 15

if (typeof x !== "number" || typeof y !== "number") {
  console.log("Seems like some numbers aren't really numbers.")
  return;
}

const array = ["+", "-", "*", "/", "**", "%"] // Valid operators

let operator = "+"

if (!array.includes(operator)) {
  console.log("Whatever is in the operator variable, isn't a operator.")
  return;
}

if (operator == "+") console.log("Calculator (Sum): " + (x + y));
else if (operator == "-") console.log("Calculator (Sust.): " + (x - y));
else if (operator == "*") console.log("Calculator (Mult.): " + (x * y));
else if ((operator == "/") && (y == 0)) console.log("Calculator (Div.): Impossible.");
else if (operator == "/") console.log("Calculator (Div.): " + (x + y));
else if (operator == "**") console.log("Calculator (Power): " + (x + y));
else if (operator == "%") console.log("Calculator (Res.): " + (x + y));


/**
 * Weekdays script
 */
let n = 5;

if (typeof n !== "number") {
  console.log("Seems like some numbers aren't really numbers.")
  return;
}

if (n < 1 || n > 7) console.log("Seems like the numbers stored in n doesn't correspond with any weekday.");

const dict = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday"
};
console.log("Weekday: " + dict[n])