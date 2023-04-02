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