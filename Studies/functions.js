/**
 * FUNCTIONS:
 * 
 * A function is a set of statements that performs a task. This block of code can be called repeatedly throughout the rest of the code.
 * Functions have an input and an output.
 * 
 */

//2 Phases of Using Functions
//The 1st phase is declaration using the 'function' keyword

function multiply(parameter1, parameter2){
    //function body
    return parameter1 * parameter2; //output
}

//the function multiply has been declared with 2 parameters
//parameters are inputs defined during declaration
//this function's output is the product of paramater1 and parameter2

//The 2nd phase is invocation/calling/executing/applying

console.log(multiply(2, 10)); //outputs 20
//2 and 10 are the arguments
//arguments are inputs when the function is executed
//parameters can be thought of as car seats and arguments are the passengers

//Named Functions
//The following is an example of a named function

console.log(add(1, 2)); //named function 'add' is hoisted

function add(p1,p2){
    return p1 + p2;
}

//the name of this function is add. Named functions are also hoisted to the top of the program

//Anonymous Functions & Function Expressions
//Functions that are defined without a name. This anonymous function is assigned to x.

let x = function(){
    console.log('Hello friend!');
}

x();    //anonymous functions are not hoisted.

//Scope
//Variables defined in a function are locally scoped

var a = 'globe scoped';
function example(){
	var b = 'local scoped';
	console.log(a);
	console.log(b);
}
console.log(a);	//global scoped
console.log(b);	//throws an error
example();	//global scoped	local scoped

//In the example above, variable 'a' has a global scope thus function example has access to it
//variable 'b' is locally scoped so trying to access it in line 58 throws an error
//invoking the function displays a's value and b's value because the function has access to the global variable and its own local variable

//Closure is a function having access to the parent scope, even after the parent function has closed

function display() {
    var name = 'Samson'; // name is a local variable created by display
    function displayName() {
      // displayName() is the inner function, that forms the closure
      return 'My name is ' + name; // use variable declared in the parent function
    }
    return displayName(); //inner function is called and uses parent function's local variable
  }
  
  console.log(display());        //=> My name is Samson

  //inner function, displayName, has access to the parent scope, even after the parent function, display, has closed