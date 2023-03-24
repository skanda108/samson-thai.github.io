/**
 * LOOPS:
 * 
 * Loops are a feature of JavaScript that allow a block of code to be executed repeatedly. Loops offer an easy way to do something repeatedly.
 * 
 * There are 3 basic types of loops.
 * 
 * 1) For:
 * The for loop repeats until a specified condition evaluates to false. They are useful for iterating over arrays.
 * 
 * 2) For In:
 * The for in loop is designed to iterate over objects.
 * 
 * 3) While:
 * The while loop is useful when the exact number of iterations needed is not known.
 * 
 */

//Examples:
//for loop, count up example

for (let i = 0; i < 10; i++){
    console.log(i);
};

//the example above logs 0,1,2,3,4,5...,9 to the console.
//i begins at 0
//the block of code at line 23, continues as long as i is less than 10, 
//and i increments by 1
//the instructions that are executed are logging i, which represents a number, to the console

//for loop, count down example

for (let i = 10; i > 0; i--){
    console.log(i);
};

//this example counts 10,9,8,...,1
//i begins at 10
//the code at line 35 continues as long as i is greater than 0
//and then i decreases by 1 every iteration

//Using the for loop over an array

let array = ['one', 'two', 'three', 'four'];

for (let i = 0; i < array.length - 1; i++){
    console.log(array[i]);
}

//this example prints the elements of array to the console
//the 1st iteration runs console.log(array[0]) which evaluates to console.log('one');
//this continues until i is equal to array.length - 1. array.length - 1 is 3 in this example
//array.length - 1 is used because of 0 indexing

//iterating backwards over an array

for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}

//this example begins at the last item in an array and counts backwards
//the intial value of i is array.length - 1 which represents the last item in an array