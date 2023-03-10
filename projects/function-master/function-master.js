//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let out = [];
    for (var key in object){
        out.push(object[key]);
    }
    return out;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let arr = [];
    for (let key in object){
        arr.push(key);
    }
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let arr = [];
    for (let key in object){
        if (typeof object[key] === 'string'){
            arr.push(object[key]);
        }
    }
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) return 'array';
    if (typeof collection === 'object') return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let arr = string.split(' ');
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return 'Welcome' + ' ' + object.name[0].toUpperCase() + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name[0].toUpperCase() + object.name.slice(1) + ' is a ' + object.species[0].toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises === undefined){
        return 'there are no noises';
    } else if (object.noises.length === 0){
        return 'there are no noises';
    } else {
        return object.noises.join(' ');
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.friends === undefined){
        return false;
    } else if (object.friends !== undefined){
        for (let i = 0; i < object.friends.length; i++){
            if (object.friends[i] === name){
                return true;
            }
        }
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var nonFrens = []; //list of non friends
    var nameList = []; //list of names besides current name input
    var current = {}; //current object. will use current.friends array to compare against nameList
    for (let i = 0; i < array.length; i++){
        if (name === array[i].name){
            current = array[i];
        } else {
            nameList.push(array[i].name);
        }
    }
    if (current.friends.length === 0){ //if the current person has no frens, his non fren list is the same as nameList
        nonFrens = nameList;
        return nonFrens;
    }

    for (let i = 0; i < nameList.length; i++){
        if (current.friends.indexOf(nameList[i]) === -1){ //indexOf method is important here
            nonFrens.push(nameList[i]);
        }
    }
    return nonFrens;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    if (array.length > 0){
        for (var key in object){
            for (var j = 0; j < array.length; j++){
                if (key === array[j]){
                    delete object[key];
                }
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var output = [];
    for (let i = 0; i < array.length; i++){
        if (output.indexOf(array[i]) === -1){
            output.push(array[i]);
        }
    }
    return output;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}