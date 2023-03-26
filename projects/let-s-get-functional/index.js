// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./samson-thai.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/*
filter
    //best for problems when you are searching for items that meet a certain condition

map
    //best for problems when you want to return a new array with every 
 */

var maleCount = function(array) {
    //use filter method to return an array of only the male customers
    //iterate through collection and pass each item to a test function
    //if test function returns true, item is pushed to output array
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });

    return males.length;
};

var femaleCount = function(array){
    //use _.reduce() to accumulate the number of female customers
    let females = _.reduce(array, function(acc, current){
        //acc = 0, current = { name: 'Adele Mullin', gender: 'female'}

        if (current.gender === 'female'){
            acc += 1;
        }

        return acc;
    }, 0);
    //return number of female customers returned above
    return females;
};

var oldestCustomer = function(array){
    let ages = _.pluck(array, 'age');
    var index;
    _.reduce(ages, function(oldest, next, i){
        if (next > oldest){
            index = i;
            return next;
        }
        return oldest;
    });
    return(array[index]['name']);
};

var youngestCustomer = function(array){
    let ages = _.pluck(array, 'age');
    var index;
    _.reduce(ages, function(youngest, next, i){
        if (next < youngest){
            index = i;
            return next;
        }
        return youngest;
    })
    return(array[index]['name']);
};

var averageBalance = function(array){
    let balances = _.pluck(array, 'balance');
    balances = _.map(balances, function(element){
        let actual = element.slice(1);
        actual = actual.replace(',','');
        return Number(actual);
    });
    let sum = _.reduce(balances, function(total, element){
        return total + element;
    }, 0);
    let average = (sum / balances.length);
    return average;
};

var firstLetterCount = function(array, letter){
    let out = _.filter(array, function(customer){
        return customer.name[0] === letter.toUpperCase() || customer.name[0] === letter.toLowerCase();
    });
    return out.length;
};

var friendFirstLetterCount = function(array, customer, letter){
    let person = _.filter(array, function(element){
      return element.name === customer;
    })[0];
    let out = _.filter(person.friends, function(element){
        return element.name[0] === letter.toUpperCase() || element.name[0] === letter.toLowerCase; 
    });
    return out.length;
};

var friendsCount = function(array, name){
    let frens = [];
    _.each(array, function(customer){                   //array is customers.json. customer is array[i] element
        _.each(customer.friends, function(friend){      //customer.friends is array[i].friends array. friend is friend object
            if (friend.name === name){
                frens.push(customer.name);
            }
        })
    })
    return frens;
};

var topThreeTags = function(array){

};

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
