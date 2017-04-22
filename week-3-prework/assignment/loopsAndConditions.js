console.log("loopsAndConditions code sourced");
function onlyEvens(array) {
  // complete this function so that given an array full of
  // numbers, it returns a new array containing only the even ones
  // for example `onlyEvens([1,2,3,4]) === [2,4]`
var onlyEvensArray = [];
  for (i=0; i < array.length; i++){
    if (array[i] % 2 === 0){
      onlyEvensArray.push(array[i]);
    }
    console.log(onlyEvensArray);
  }
  return onlyEvensArray;
}

var arrayOfNumbers = [2,37,9,47,20,109,108,288,36,84,67,43,22];
console.log(arrayOfNumbers);
console.log(onlyEvens(arrayOfNumbers));
