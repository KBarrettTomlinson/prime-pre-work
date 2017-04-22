console.log("logicalOperators.js code sourced");

function countTrueAndFalse(arrayLogicalOperators){
  var trueCount = 0;
  var falseCount = 0;
  for (i=0;i<arrayLogicalOperators.length;i++){
    if (arrayLogicalOperators[i] === true){
      trueCount += 1;
    }
    else if (arrayLogicalOperators[i] === false){
      falseCount += 1;
    }
  }
  console.log("True Count");
  console.log(trueCount);
  console.log("False Count");
  console.log(falseCount);
}
var andTruthTable = [true  && true,
                     true  && false,
                     false && true,
                     false && false];

// in the array 'andTruthtable', how many elements are true?
// uncomment the next line and replace ___ with the appropriate value
// before checking the answer, I believe it to be "1" since AND requires
// both of the conditions to be true
var numberOfTrueElements = 1;
console.log(andTruthTable);
countTrueAndFalse(andTruthTable);

var orTruthTable = [true  || true,
                    true  || false,
                    false || true,
                    false || false];

// in the array 'orTruthTable', how many elements are false?
// uncomment the next line and replace ___ with the appropriate value
// before checking the answer I believe it to be "1" since an OR operator
// only requires one of the conditions to be true
var numberOfFalseElements = 1;
console.log(orTruthTable);
countTrueAndFalse(orTruthTable);



function opposite(booleanValue) {
  // complete this function so that it always returns the opposite of whatever value is passed in
  // for example `opposite(true) === false` and `opposite(false) === true`
  return !booleanValue;
}

console.log("Testing True");
console.log(opposite(true));
console.log("Testing False");
console.log(opposite(false));
