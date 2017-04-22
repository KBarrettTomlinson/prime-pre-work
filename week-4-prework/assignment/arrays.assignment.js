/**
Array Review
**/

//Declare global variables
var myCreatedArray = [];
var myReversedArray = [];

//Declare global functions
function createArray() {
  // create an array with 6 elements (numbers and strings only)
  // Write code below
  var myArray = [37,45,"Special","Agent","Dale","Cooper"];
  // return this array
  return myArray;
}
//End function createArray

function loopArray(array) {
  // used below
  var conString = '';
  // Write code here: Concatentate all of the values in array together using a loop
  for(i = 0; i < array.length; i++){
    conString += array[i];
  }
  // return concatentated values
  return conString;
}
//End function loopArray

function arrayReverser(arrayParam) {
  // Copy items from arrayParam to a new array called reversedArray, reversing the order of elements
  // Last element on arrayParam should become the first in reversedArray
  // Do not use Array.reverse()!
  // Write the code here
  var reversedArray = [];
  var j = 0;
  for (i = arrayParam.length-1; i >= 0; i--){
    reversedArray[j] = arrayParam[i];
    j += 1;
  }
  // return our reversed array
  return reversedArray;
}
//End function arrayReverser

//Call and console log the return for loopArray and arrayReverser
//Confirm js is sourced
console.log("arrays.assignment.js code sourced");
//Call createArray
console.log("Call createArray");
//Assign value to myCreatedArray
myCreatedArray = createArray();
console.log("Print out myCreatedArray");
console.log(myCreatedArray);
//Call loopArray
console.log("Call loopArray");
console.log(loopArray(myCreatedArray));
//Call arrayReverser
console.log("Call arrayReverser");
myReversedArray = arrayReverser(myCreatedArray);
console.log("Print out myReversedArray");
console.log(myReversedArray);

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  createArray: createArray,
  loopArray: loopArray,
  arrayReverser: arrayReverser
};
