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
/**
 * for loops are made of 3 configuration statements
 * let i = 0; start statement. an index variable initialized to 0
 * i < 10; condition to stop looping. this example will continue looping until i is greater than or equal to 10
 * i++; update statement that increases the index, i, by 1 after each iteration
 */
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

//For In loop
//The for in loop is designed to iterate over an object

let object = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

for (let key in object){
    console.log(key);
    console.log(object[key]);
}

//In the above example, the key variable represents the key in an object
//this for in loop will print every key and value (object[key] evaluates to value) in the object
/**
 * The output will look like this:
key1
value1
key2
value2
key3
value3
 */

//while loop

let count = 0;  //initializing counting variable

while(count < 10){      //loop continues while this statement is true
    console.log(count); //code to be executed repeatedly
    count++;            //incrementing the counting variable. not incrementing the count variable would lead to an infinite loop causing the program to crash
}

//while loops are useful when the exact number of iterations needed is not known