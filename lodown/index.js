'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: function takes in an input value and returns the input value unchanged
 * 
 * @param { Any Value} value : function takes in any value;
 * @returns { Any Value } : function returns input value unchanged
 */

function identity(value){
    return value;
};

module.exports.identity = identity;


/**
 * typeOf: takes in any input value and returns a string showing what its datatype is
 * 
 * @param { Any Value} value : function takes in any value
 * @returns { string } : function returns a string showing the input value's datatype
 */
function typeOf(value){
    //if statements going through every datatype
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    if (value instanceof Date) return 'date';
    if (typeof value === 'string') return 'string';
    if (typeof value === 'number') return 'number';
    if (typeof value === 'boolean') return 'boolean';
    if (typeof value === 'function') return 'function';
    if (typeof value === 'object') return 'object';
    if (typeof value === 'undefined') return 'undefined';

};
module.exports.typeOf = typeOf;

/**
 * first: takes in an array and number and returns an array showing the first <number> items of <array>
 * 
 * @param { array } array : function takes in an array
 * @param { number } number : takes in a number which determines what to display in output array
 * @returns { array } array: returns array based on the 1st <number> of items in <array>
 */

function first(array, number){
    if (Array.isArray(array) === false){
        return [];
    }
    if (typeof number !== 'number'){
        return array[0];
    }
    if (number < 0){
        return [];
    }
    if (number > array.length){
        return array;
    }
    if (number <= array.length){
        let out = [];
        for (let i = 0; i < number; i++){
            out.push(array[i]);
        }
        return out;
    }
};

module.exports.first = first;

/**
 * last: takes in an array and number and returns an array showing the last <number> of items in <array>
 * 
 * @param { array } array :1st input is an array
 * @param { number } number :2nd input is number which determines what to display in output array.
 * @returns { array } array: returns an array based on last <number> of items in <array>
 */


function last(array, number){
    if (Array.isArray(array) === false){
        return [];
    }
    if (typeof number !== 'number'){
        return array[array.length - 1];
    }
    if (number < 0){
        return [];
    }
    if (number > array.length){
        return array;
    }
    if (number <= array.length){
        let out = [];
        for (let i = number; i > 0; i--){
            out.unshift(array[i]);
        }
        return out;
    }
};

module.exports.last = last;

/**
 * indexOf: takes in array and value and shows the index (number) of the 1st occurence of the <value> in the <array>
 * If <value> is not present in <array>, function returns -1.
 * 
 * @param { array } array :1st input is an array
 * @param { any value } value : 2nd input is any value. function checks if <value> is within <array>
 * @returns { number } number: returns a number indicating the index of the 1st occurence of the <value> in the <array>.
 * returns -1 if <value> is not present in <array>.
 */

function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }

    return -1;
};

module.exports.indexOf = indexOf;

/**
 * contains: takes in an array and value and returns a boolean if the <value> is within the <array>
 * returns false if <value> is not given
 * 
 * @param { Array } array: 1st input is an array 
 * @param { Any Value } value : 2nd input is any value. Function checks if <value> is present within <array>
 * @returns  { boolean } boolean: function returns true if <value> is within <array>.
 * returns false if <value> is not present in <array> or if <value> is not given
 */

function contains(array, value){
    for (let i = 0; i < array.length; i++){
        var out = array[i] === value ? true : false;
        if (out === true){
            return out;
        }
    }
    return false;
 
};

module.exports.contains = contains;

/**
 * each: Loops over a collection, Array or Object, and applies the 
 * func Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 */


function each(collection, func){
    //determine if collection is an array
    if (Array.isArray(collection)){ //determine is Array.isArray(collection) is truthy
        //iterate using for loop
        for (let i = 0; i < collection.length; i++){
            //invoke function on the current element, current index, and the collection itself
            func(collection[i], i, collection);
        }
    } else {    //else it's an object
        //iterate through object
        for (let key in collection){
            func(collection[key], key, collection);
        }
    }
    
};

module.exports.each = each;

/**
 * unique: takes in an array and returns a new array with duplicate values removed
 * 
 * @param { array } array : input is an array.
 * @returns { array } array: returns new array with duplicates removed
 */


function unique(array){
    var output = [];
    for (let i = 0; i < array.length; i++){
        if (output.indexOf(array[i]) === -1){
            output.push(array[i]);
        }
    }
    return output;
};

module.exports.unique = unique;

/**
 * filter: takes in an array, calls a function over each array element and pushes
 * array elements that pass true into a new array.
 * 
 * @param { array } array :1st input is an array
 * @param {function} func :2nd input is a function to test over array elements
 * @returns { array } array: returns a new array for which using the function over the array elements is true
 */

function filter(array, func){
    let out = [];

    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            out.push(array[i]);
        }
    }

    return out;
};

module.exports.filter = filter;

/**
 * reject: takes in an array, calls a function over each array element and pushes
 * array elements that test false into a new array.
 * 
 * @param { array } array :1st input is an array
 * @param { function } func:2nd input is a function to test over array elements 
 * @returns { array } array: returns a new array for which using the function over the
 * array elements returns false. This is the logical inverse of filter().
 */


function reject(array, func){
    let out = [];

    for (let i = 0; i < array.length; i++){
        if (!(func(array[i], i, array))){
            out.push(array[i]);
        }
    }

    return out;
};

module.exports.reject = reject;

/**
 * partition:takes in an array and calls a function over each array element.
 * returns an array of arrays. array[0] contains the values for which <function>
 * returned something truthy.
 * array[1] contains the values for which <function> returned something falsey
 * 
 * @param { array } array:1st input is an array 
 * @param { function } func:2nd input is a function to test over array elements 
 * @returns {array} array: returns an array of arrays with array[0] being the elements
 * that test true for which the function tests over the input array elements and 
 * array[1] being the elements that test false
 */


function partition(array, func){
    let out = [[], []]; //divided into out[0] for truthy and out[1] for falsey

    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            out[0].push(array[i]);
        } else {
            out[1].push(array[i]);
        }
    }
    return out;
};

module.exports.partition = partition;

/**
 * map: takes in a <collection>, array or object, and returns a new array with results of
 * calling <function> on collection elements
 * 
 * @param { array or object } collection :1st input is a collection to test the function over
 * @param { function } func :2nd input is a function to test over collection elements
 * @returns { array } array: new array with results of calling <function> on collection elements
 */

function map(collection, func){
    let out = [];
    if (Array.isArray(collection)) { //collection is an array
        for (let i = 0; i < collection.length; i++){
            if (func(collection[i], i, collection)){
                out.push(func(collection[i], i, collection));
            }
        }
    } else { //collection is an object
        for (let key in collection) {
            if (func(collection[key], key, collection)){
                out.push(func(collection[key], key, collection));
            }
        }
    }
    return out;
};

module.exports.map = map;

/**
 * pluck: takes an <array> of objects and a string representing a key and returns the value
 * of each key in every object within the <array>
 * 
 * @param { array } array : an array of objects
 * @param { string } prop :string representing a property in an object
 * @returns { array } array: returns an array containing the value of <property> for every
 * element in <array> of objects
 */

function pluck(array, prop){
    //array is an array of objects
    //use map() method
    let out = _.map(array, function(object){
        return object[prop];
    });
    return out;
};

module.exports.pluck = pluck;

/**
 * every: tests whether all elements in <collection> pass true by provided <function>.
 * If no function is given, it returns true if every element in collection is truthy. 
 * 
 * @param { array or object } collection :collection to test function over
 * @param { function } func :function to test over every element in collection
 * @returns { boolean }: returns true if every element in collection pass true for the function
 * being called over collection. returns false if at least 1 element does not pass the 
 * function being called over collection
 */

function every(collection, func){
    //determine if func did not receive a value
    if (func === undefined){
        //determine if array
        if (Array.isArray(collection)){
            //iterate
            for (let i = 0; i < collection.length; i++){
                //determine if current value is falsey
                if (!collection[i]){
                    return false;
                }
            }

        } else { //else it's an object
            //determine if current value is not truthy
            for (let key in collection){
                if (!collection[key]){
                    return false;
                }
            }
        }
    } else {
    //else it did
        //determine if array
        if (Array.isArray(collection)){
            //iterate
            for (let i = 0; i < collection.length; i++){
                if (!func(collection[i], i, collection)){
                    return false;
                }
            }

        } else {    //else it's an object   
            for (let key in collection){
                if (!func(collection[key], key, collection))
                return false;
            }   

        }
    }
    return true;
};

module.exports.every = every;

/**
 * some: tests if at least one <collection> element passes true by the test implemented
 * by the provided <function>. returns true if it finds an element for which the provided
 * function returns true. otherwise it returns false
 * 
 * @param { array or object } collection :collection to test over
 * @param { function } func :function to test over every collection element
 * @returns {boolean} boolean: returns true if at least the value of calling <function>
 * is true for at least one element. returns false if all elements are false.
 */

function some(collection, func){
    //determine if func did not receive a value
    if (func === undefined){
        //determine if array
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (collection[i]){
                    return true;
                }
            }
        } else {    //it's an object
            for (let key in collection){
                if (collection[key]){
                    return true;
                }
            }
        }
    } else { //func did receive a value
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (func(collection[i], i, collection)){
                    return true;
                }
            }
        } else {
            for (let key in collection){
                if (func(collection[key], key, collection))
                return true;
            }
        }

    }
    return false;
};

module.exports.some = some;

/**
 * reduce: executes function on every array element passing in the return value from the
 * calculation on the preceding element. the final result from running the function
 * across all elements is a single value
 * 
 * @param { array } array : array to perform function over
 * @param { function } func : function to be run for each element in array
 * @param { number } seed : an initial value
 * @returns { any value } :returns a result of a single value from running reducer across
 * all elements of the array
 */

function reduce(array, func, seed){
    //create result variable
    let result;
    //determine if seed is undefined
    if (seed === undefined){
        result = array[0];
        //iterate using a for loop
        for (let i = 1; i < array.length; i++){
            //reassign result to invoking function on result, current item, current index, and array
            result = func(result, array[i], i, array);
        }

    } else { //else is defined
        result = seed;
        //iterate using for loop
        for (let i = 0; i < array.length; i++){
            result = func(result, array[i], i, array);
        }

    }
    //return result
    return result;

};

module.exports.reduce = reduce;

/**
 * extend: copies properties from object2 into object1 and can be done with any number
 * of objects
 * 
 * @param { object } object: takes in any number of objects
 * @returns { object } object: returns an object with all properties copied into the 
 * 1st object
 */


function extend(){
    //arguments[0] is the 1st object
    for (let i = 1; i < arguments.length; i++){
        Object.assign(arguments[0], arguments[i]);
    }
    return arguments[0];
};

module.exports.extend = extend;
