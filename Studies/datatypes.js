/**
 * DATATYPES:
 * 
 * Values in JavaScript can be organized by datatypes.
 * 
 * Datatypes can broadly be broken down into simple or complex.
 * 
 * SIMPLE/PRIMITIVE
 * Simple datatypes include:
 * Number: numeral values
 * String: collection of characters between quotes
 * Boolean: true or false to handle logic
 * NaN: numeral type that stands for not a number
 * Undefined: an undefined value
 * Null: the absence of value
 * Infinity and -infinity: A special numeric value that's greater than any number
 * 
 * They are simple because they are atomic and immutable. They do not hold, collect or aggregate other values.
 * Operations on simple values return new simple values. They do not alter the original value.
 * 
 * COMPLEX
 * Object: collections of key, value pairs { key: 'value' }
 * Arrays: collections of values as a list
 * Functions: perform actions on data and return them
 * 
 * Complex datatypes aggregate other values and therefore have an indefinite size.
 * They are stored as reference when assigned to a variable. Making a copy of that variable makes a reference to where that
 * datatype is stored and not its literal value.
 * Changes to the copy do not affect the original.
 * 
 * PRIMITIVE vs COMPLEX Types:
 * Variables have a fixed amount of memory and can hold the actual values of primitive types.
 * 
 * Varibles can only hold references to values of complex types.
 * Complex types can be of any size. Arrays can hold any number of elements.
 * Objects can hold any number of key/value pairs and functions can hold any number of statements.
 * Because complex types don't have a fixed size, variables store a reference to complex types.
 * 
 */

//Examples of simple datatypes

let a = 10;         //number
let b = 'string';   //string
let c = true;       //boolean
let d = Nan;        //not a number
let e = undefined;  //undefined
let f = null;       //null
let g = Number.POSITIVE_INFINITY; //infinity

console.log(1 / g); // => 0

//Examples of complex datatypes

let h = ['a', 1, ['nested', 'array'], false];   //array that holds other values
let i = {firstName: 'Samson', lastName: 'Thai', age: 28};   //object containing key value pairs
let add = function(num1, num2){             //function that takes in data and returns data
    return num1 + num2;
};

// Copy by Value vs Copy by Reference
//Simple datatypes are copied by value;

var a1 = 5;
var b1 = a1;    //the value stored in a1 is copied into b1

b1 = 7;     //changing the value at b1 doesn't change what's stored in a1
console.log(a1); //=> 5;

//Complex datatypes are copied by reference

var j = { key1: 'hello' };
var k = j;      //the value stored in k is a reference to the value stored in j. they both point to the same object

k.key1 = 'hi';
console.log(j.key1);    //=> hi
