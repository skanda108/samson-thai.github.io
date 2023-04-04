/**
 * OPERATORS
 * 
 * Operators perform actions on data. The actions they perform depend on what type of operator is used.
 * 
 * Types of Operators:
 * 
 * Assignment operators
 * Comparison operators
 * Arithmetic operators
 * Logical operators
 * String operators
 * Conditional (ternary) operators
 * Unary operators
 * 
 */

//ASSIGNMENT (=) assigns a value to a variable

let x = 10; //x now has a value of ten
x += 5; //same as x = x + 5     // => 15
x -= 6; //same as x = x - 6     // => 9
x *= 10; //same as x = x * 10   // => 90
x /= 6; //same as x = x / 6     // => 15
x %= 4; //same as x = x % 4     // => 3
x **= 2; //same as x = x ** 2   // => 9

//COMPARISON compare 2 values and evaluate to either true or false (boolean)

console.log(1 < 2); //true
console.log(1 >= 2); //false

//STRICT and LOOSE COMPARISON
// === is stricly equal to          !== strictly not equal to
// == is loosely equal to           != loosely not equal to

console.log(2 === 2); //true
console.log(2 == '2'); //true
console.log(2 === '2'); //false

console.log(2 !== 2); //false
console.log(2 != '2'); //false

//ARITHMETIC operators perform arithmetic on numbers

console.log(10 + 10); //20  addition
console.log(10 - 5); //5    subtraction
console.log(2 * 3); //6     multiplication
console.log(16 / 2); //8    division

//Remainder operator (%) returns the remainder
console.log(440 % 3); //2

console.log(3 ** 2); //9    exponentiation

//Increment
let a = 1;
console.log(++a); //2 shorthand for a + 1 = a

//LOGICAL operators determine logic between variables and values

//logical AND (&&). Both statements must be true for the entire statement to be true

console.log(10 < 11 && 10 > 9); //resolves to true because 10 is less than 11 AND 10 is greater than 9
console.log(10 < 11 && 10 < 9); //false

//logical OR (||). One of the statements must be true for the entire statement to be true
console.log(10 < 11 || 10 < 9); //true because the statement on the left is true

//logical NOT (!) flips the boolean from true to false or false to true
console.log(!(5 === 5)); //false
console.log(!(6 === 5)); //true

//STRING operators. Strings can be concatenated with +
let str1 = 'Hello';
let str2 = 'there';
console.log(str1 + ' ' + str2); //Hello there

//CONDITIONAL (ternary) operator takes 3 values and then executes an expression depending if the condition is true or false
//syntax
//condition ? ifTrue : ifFalse

let age = 28;
let drink = age >= 21 ? 'Whiskey' : 'Juice';

console.log(drink); //Whiskey because 28 is greater than or equal to 21

//UNARY operator is an operation with only 1 value

//typeof operator returns a string indicating the type of operand
let word = 'character';

console.log(typeof word); //string
