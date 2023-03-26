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