/**
 * CONTROL FLOW:
 * Conditional statements allow programmers to control the flow of the application.
 * 
 * We can the order in which the code executes instructions based on conditions that
 * evaluate to true or false.
 * 
 * The keywords used for control flow are if, else if, else, and switch
 * 
 */

//Examples

//if, else if, else

let age = 10;

if (age < 21){                              //executed if statement is true
    console.log('Would you like juice?');
} else if (age >= 21 && age < 70){          //executed if 1st statement is false and this statement is true
    console.log('Would you like a beer?');
} else {                                    //executes if the preceding 2 statements are false
    console.log('Would you like tea?');
}

/**
 * In the example above, since age is 10 and 10 is less than 18, that statement evaluates to true.
 * Therefore is executes the code and prints 'Would you like juice?'
 * 
 * else if allows us to execute different instructions if age is greater than 21.
 * If age were changed to be 21 or greater but less than 70, it would print 'Would you like a beer?'.
 * The statement (age < 21) would be false and would skip line 19.
 * 
 * Finally, if age was greater than 70, it would skip the first 2 conditions because those would
 * evaluate to false and print 'Would you like tea?'
 * 
 * Notice that for the last statement, only else was used rather than else if. Instead of writing if (age >= 70),
 * since we've reached this portion of the code, it can only mean age is greater than or equal to 70 so there's no
 * need to specify the conditional statement.
 * 
 */

//Switch
//Keyword switch is functionally the same as if, else if, else, but allows for cleaner looking code

function whichColor(color){                     //function takes in a string representing a color
    switch (color){
      case 'purple': return 'Purple represents royalty.';      //if color is 'purple' return 'Purple represents royalty.'
      case 'green': return 'Green represents wealth.';
      case 'gold': return 'Gold represents power.';
      case 'blue':                                              //if color is 'blue', 'orange', 'pink', 'red', then return 'This color is blah.'
      case 'orange':
      case 'pink':
      case 'red':
        return 'This color is blah.';
      default:
        return 'Colors are awesome!';                   //if color is any other input other than the specified cases, then return 'Colors are awesome!'
    }
    
  }

  console.log(whichColor('purple'));        //=> 'Purple represents royalty.'
  console.log(whichColor('green'));         //=> 'Green represents wealth.'
  console.log(whichColor('gold'));
  console.log(whichColor('pink'));
  console.log(whichColor('teal'));