//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with object as the parameter
//O: values of object returned as an array
//C:
//E:
//Initialize function with object as the param
function objectValues(object) {
    //create for in loop to access values in object
    for (keys in object){
        //return object values
     return Object.values(object);
}
    
  
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with one param representing an object
//O: return object keys in a string separated by spaces
//C:
//E:
function keysToString(object) {
// use object keys to separate object into array join method to concatenate new array into a string separated by spaces 
    return Object.keys(object).join(' ');


}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: function with object as the parameter
//O: string with the values of the object separated by spaces 
function valuesToString(object) {
    //create empty array
    var theArray = [];
    // assign variable to hold Object.values to create array 
    var  anArray = Object.values(object);
    //create if loop to loop over the array
    for(var i = 0; i <= anArray.length; i++ ){
        //create conditional statement to using type of to determine if array element is string
        if (typeof anArray[i] === 'string'){
          theArray.push(anArray[i]);
        }
    } return theArray.join(' ');


}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: input function with one parameter
//O: should return 'array' or 'object' depending on the argument passed through function
//C:
//E:
function arrayOrObject(collection) {
    // create conditional statement to determine typeof argument
    if (Array.isArray(collection) === true){
        return 'array';
    }
    else if(typeof collection === 'object' && typeof collection !== null){
        return 'object';
    }
    
 
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function that takes one param representing as string
//O: returns string with first letter capitalized
//C:
//E:
function capitalizeWord(string) {
    // return string with cap first letter 
    return string.charAt(0).toUpperCase() + string.slice(1);
    
    
     
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with one param represented as string
//O: return one string with all words in caps
//C: the first letter of each word should be capitalized
//E: 
function capitalizeAllWords(string) {
    // init var and use split to turn string into an array
    var stringArray = string.split(' ');
    //init empty array
    var emptyArray = [];
    // use map to capitalize each word and return new array
    stringArray.map((word) => {
        emptyArray.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
      });
    //return joined strings 
    return emptyArray.join(' ');
     
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with object parameter 
//O: return string welcome + value of name key
//C:
//E:
function welcomeMessage(object) {
//return 'Welcome plus value of the name key'
return 'Welcome ' + object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + '!';


}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with one param represented as object
//O: return string with name value 'is a' species value 
//C: first letter of name and first letter of species need to be capialized
//E:
function profileInfo(object) {
    // init var name to hold capitalization of name
    var name = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
    //init var species to hold capitalization of species 
    var species = object['species'].charAt(0).toUpperCase() + object['species'].slice(1)
    // return string name is a species 
    return name + ' is a ' + species;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with one param repped as object
//O:  string with animal noises if there is an array, string ' there are no noises' if no array
//C: animal noise must be separated by space 
//E: the array is empty, noises is not part of the object
function maybeNoises(object) {
    // create conditional statement to determine if  noise property is array
    if (Array.isArray(object['noises']) &&  object['noises'].length !== 0){
        //return value of noise array as strings joined by spaces
        return object['noises'].join(' ');
    }   // create conditional statement to determine if  noise property is array and empty   
    if (Array.isArray(object['noises']) && object['noises'].length === 0) {
        return 'there are no noises';
        // else stmt for all other factors
    } else{
        return 'there are no noises';
    }
    

    
    
     
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with two parameters represented as strings
//O: boolean true  or false dependent upon if  there is a match within the parameters
//C:
//E:
function hasWord(string, word) {
    // init var as empty array to collect new array
    var stringArray = [];
    // Use split to convert string into an array
    stringArray = string.split(' ');
    // init for loop to access array values, conditions begin index i, end length of array, increment ++
    for(var i = 0; i < stringArray.length; i++){
    //create conditional stmt to compare each index of the array to word 
    if( stringArray[i] === word){
        return true;
    }
    // if loop conditions are not met return false
    } return false;

   

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with two parameters represented as object and string
//O: return  object with string added to object friends  array
//C:
//E:
function addFriend (name, object) {
    // create for in loop to loop over object 
    for( var key in object){
    // push string to friends array 
        object['friends'].push(name);
    }
     //return object
    return object;
    
   

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with two parameters represented as object and string
//O: return boolean true or false dependent upon if name is part of the friends array
//C:
//E:
function isFriend(name, object) {
    
// use for in loop to iterate over object and compare values. 
        for(var key in object){
    // create conditional statement  using .includes to test if friends array includes name]
        if (object['friends'].includes(name)){
            return true;
        }
    }
    
    return false;
    

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I:functon with two params represented as array and string
//O: return array with names of people not included in the original array 
//C:
//E:
function nonFriends(name, array) {
    // init var as emprty array to collect values
    var collectValues = []; 
    //init var to collect name values
    var nameValuesArray = [];
     
    // init for loop to iterate over the loop begin zero index, end length of array, increment by 1
    for( var i = 0; i < array.length; i++){
    // init conditional stmt if name does not equal array[i]
    //access the object at the name key compare the friends value in that object
    // to the names(keys)value in the other objects, if the friends value don't contain the names value 
    //push the names to collectValues 
    // for index 0 we compare the friends array to  
     
        if(!array[i]['friends'].includes(name) && array[i]['name'] !== name){
            // push array[i] into collectValues 
            collectValues.push(array[i]['name']);
        }
    }
    
    
    // return collectValues
    return collectValues;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with one param reprresented as object
//O: return object with either an updated key value pair or newly added key value pair
//C: 
//E:
function updateObject(object, key, value) {
    // update the keys of the object 
    object[key] = value;
   //create conditional stmt to add new keys to the object
    if(object.hasOwnProperty(key) === false){
        object[key] = value;
    }
//eturn object
return object;
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with two inputs represented as obaject and an array 
//O: return object with properties removed if they are in the array
//C:
//E:
function removeProperties(object, array) {
    // init for in loop to access the keys in object
  for( var key in object){
    //create if stmt using includes to determine if key is in array
        if(array.includes(key)){ 
        delete object[key];
        }
    } 
//return object
 return object;
}
//
// create if stmt to test if keys in object equals values in array 
//if keys in object equals values in array delete the matching keys 

//use object values to compare  
//Should remove any properties on <object> that are listed in <array

//return object;


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with one parameter represented as array
//O: array with duplicate elements removed
//C:
//E:
function dedup(array) {
    //init var as empty array to collect new elements
        var collectValues = [];
        //init for loop to access values of array
        for (let i = 0; i < array.length; i++) {
            //create conditional stmt using includes to determine duplicates
          if (!collectValues.includes(array[i])) {
            // push non duplicate values to collectValues
            collectValues.push(array[i]);
          }
        }// return collectValues
        return collectValues;
      
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