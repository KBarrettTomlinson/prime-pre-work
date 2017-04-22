// remember! array indices start at 0
console.log("arrayIndexConsiderations code sourced");
var colors = ['red', 'blue', 'yellow','orange','grey','violet','brown'];
var arrayLength;

// using array indices, write an expression that will evaluate to the color described by these variable names
// for example var theColorBlue = colors[1];
// uncomment the next two lines and replace ____ with the appropriate code
var theColorRed = colors[0];
var theColorBlue = colors[1];
var theColorYellow = colors[2];

// what happens if we access an index that has no element?
// uncomment the following line and replace ____ with the appropriate code
var fortyThirdColor = colors[42];
console.log(fortyThirdColor);
// the console log returns and undefined error

function lastItem(array) {
  // this function accepts an array as an argument
  // have it return the last item in the array
  arrayLength = array.length;
  // console.log(arrayLength);
  return array[arrayLength - 1];

}
// verify answer
console.log(lastItem(colors));
