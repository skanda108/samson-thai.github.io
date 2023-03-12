/**
 * VARIABLES:
 * 
 * 0: Variables are named containers for data in JavaScript. You can declare a variable using 3 different declarative keywords (var, let, const)
 * Variables can hold various datatypes such as strings, numbers, booleans, arrays, and objects.
 * 
 * 1: Declaration and assignment: To create a variable in Javascript, it is best to first 'declare'
 * the variable using one of the 3 declarative keywords. Once declared, you can then 'assign' the variable a value.
 * If var or let is used to declare a variable, it can be reassigned.
 * 
 * 2: var, let, const: There are 3 ways to declare a JavaScript variable:
 * var, let, const
var :   reassignable: yes
	    hoisted: yes		//declaration is brought to top of code
	    scope: global, local
let :   reassignable: yes
	    hoisted: no
	    scope: block
const : reassignable: no
	    hoisted: no
	    scope: block
 * 
 * 
 * let and const were introduced in 2015. In addition to having global and function scopes, let and const can be blocked scoped (if and loop statements).
 * let and const are not hoisted.
 * 
 * 3: Hoisting:
 * Before the execution of the code, variable (declared with var) and function declarations are moved to the top of the program (or hoisted to the top).
 * var values will not throw Reference Errors if you try referencing them before they are declared but they will return undefined.
 * Variables declared using let and const are not hoisted. They will throw a Reference Error if you try referencing before they are declared.
 */

//1. a: Declaration

var name;   //name is declared

//1. b: Assignment

name = 'Samson'; //name is assigned a value of 'Samson'

//1. c: Usually both declaration and assignment are performed in 1 line.

var name = 'Samson';

//1. d: Variables can also be reassigned (using var and let).

name = 'Sam';
console.log(name); //prints Sam instead of Samson

//2. var, let, const;

//var and let are reassignable

var age = 28;
age = 29; //this is allowed

let color = 'blue';
color = 'red'; //this is allowed

//const cannot be reassigned
const city = 'New Orleans';
city = 'New York'; //this will throw an error

//Scope
//var, let, const can be function scoped but let and const can also be block (if, loops) scoped

function example(){
	var a = 1;
	let b = 2;
	const c = 3;
}

example();
//a is not accessible here
//b is not accessible here
//c is not accessible here

if (true){
	var d = 10;
	let e = 20;
	const f = 30;
}

console.log(d, e, f);
//d is accessible here
//e is not accessible here
//f is not accessible here

for (var i = 0; i < 100; i++){
	var x = 100;
	let y = 200;
	const z = 300;
}
//x is accessible here
//y is not accessible here
//z is not accessible here

//Hoisting
//using var, variable declarations are brought to the top. this does not occur with let and const

console.log(something); //this will print undefined

var something = 'something';

console.log(something); //prints 'something'

console.log(test); //will throw a reference error
console.log(testing); //will throw a reference error

let test = 'this is a test';
const testing ='testing 1 2 3';