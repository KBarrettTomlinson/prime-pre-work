// Is the JavaScript file sourced? Check in the browser console by
// right clicking and selecting 'Inspect'. If the script is properly
// sourced you will see the log message: 'Script sourced!'.
console.log('Script sourced!');

// * Step One * - Create a variable from user input and conditional statement
  // var animal =
// Once you have the animal variable. Write your conditional statement.
// Use these exact strings: 'Try again.' and 'How did you know?!'.

/*var animal = prompt("Of what animal am I thinking?");

if (animal === "turtle"){
  console.log("How did you know?");
}
else {
  console.log("Try again.");
}*/


// * Step Two * - Refactor into a function


// Call the function by passing the animal variable into it
var animalName = prompt("Of what animal am I thnking?");

function animalGuess(animalName){
   //if statement goes in here
   if (animalName === "turtle"){
     console.log("How did you know?");
   }
   else {
     console.log("Try again");
   }
}

animalGuess(/*prompt("Of what animal am I thinking")*/);

// What will this log?
console.log(animalName);
/* because the variable was not globally declared, this will return an error.
However, by declaring it globally the error is corrected, as seen above */
