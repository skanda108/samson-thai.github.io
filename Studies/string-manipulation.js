/**
 * STRING MANIPULATION
 * 
 * There are a variety of methods to manipulate strings in JavaScript
 * 
 */

//The '+' operator
var name = 'Samson';

var message = 'Hello ' + name + '!';
console.log(message); //=> Hello Samson!

//ES6 using backticks instead of quotes
const messageTwo = `Hello ${name}!`;

//Methods
//the slice method extracts a section of a string and returns it as a new string
//syntax: slice(indexStart);
//        slice(indexStart, indexEnd);

console.log(name.slice(1)); //=> amson
console.log(name.slice(1, 2)); //=> a

//using negative numbers counts the position from the end

console.log(name.slice(-1));    //=> n

//charAt method returns the character at a specific index in the string
console.log(name.charAt(2)); //=> m

//the replace method replaces a value with another value in a string

let text = 'Hello friend!';
console.log(text.replace('Hello','Howdy')); //=> Howdy friend!

//toUpperCase converts a string to uppercase
console.log(text.toUpperCase()); //=> HELLO FRIEND!

//toLowerCase converts a string to lowercase
console.log(text.toLowerCase()); //=> hello friend!

//concat joins two or more strings. It can be used instead of the + operator

let text1 = 'My name is';
let text2 = 'Sam.';
console.log(text1.concat(' ', text2)); //=> My name is Sam.
//same result using the + operator
console.log(text1 + ' ' + text2); //=> My name is Sam.

//strings can be converted into arrays with the split method
let text3 = 'abcdefg';
let array = text3.split(''); //splits at every index
console.log(array); //=> ['a', 'b', 'c', 'd', 'e', 'f', 'g']

//the array can be converted back into a string with the join method
let joined = array.join('');
console.log(joined); //=> abcdefg