/**
 * Object prototypes
 * 
 * 1. Make a function that receives a string and returns the number of letters it has.
 * 2. Make a function that receives a string and returns the number of words it has.
 * 3. Make a function that receives a string and returns the reverse of that string.
 *    Use recursivity.
 * 4. Make a function that returns true if the given string is a palindrome.
 */

/**
 * Made with ❤️ by:
 * Angélica Rivas
 * Lit Jhosby
 * Osmel Álvarez
 * Santiago Rojas
 */

const msg = "Only strings allowed"

function isString(input) {
  if (typeof input !== "string") return false;
  else return true;
};


/**
 * Count letters of a given string
 */
function countLetters(str = "") {
  if (isString(str) == true) {
    let char = str.length;
    let space = str.split(" ").length - 1; // count spaces
    return char - space;
  }
  else return msg;
};

console.log(countLetters("Hola, Don Pepito")); // Expected result: 14


/**
 * Count words of a given string
 */
function countWords(str = "") {
  if (isString(str) == true) {
    return str.split(" ").length
  }
  else return msg;
};

console.log(countWords("Hola, Don José")); // Expected result: 3


/**
 * Reverse a string recursively
 */
function reverse(str = "") {
  if (isString(str) == true) {
    if (str === "") return "";
    return reverse(str.slice(1)) + str[0];
  }
  else return msg;
};

console.log(reverse("Hola")); // Expected result: aloH


/**
 * Check palindromes
 */
function isPalindrome(str = "") {
  if (isString(str) == true) {
    let reversed_str = reverse(str)
    if (str === reversed_str) return true;
    else return false;
  }
  else return msg;
};

console.log(isPalindrome("arepera")) // Expected result: true