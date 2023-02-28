// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //


    //if else read from top to bottom so do the strictest case first
    for (var i = 1; i < 101; i++){
        if (i % 3 === 0 && i % 5 === 0){ //if a number is a multiple of 3 AND 5 write FizzBuzz
            console.log('FizzBuzz');
        } else if (i % 3 === 0){        //if a number is a multiple of 3 write Fizz
            console.log('Fizz');
        } else if (i % 5 === 0){        //if a number is a multiple of 5 write Buzz
            console.log('Buzz');
        } else {                        //all other cases print the number
            console.log(i);
        }
        //console.log(i);
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}