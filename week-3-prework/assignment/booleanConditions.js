console.log("booleanConditions.js code source");
//var eggsInCartonUser = 0;
//var cartonCapacityUser;


function isCartonFull( eggsInCarton, cartonCapacity ){
  // write an if statement checks if the carton is at cartonCapacity
  // this function should return true if so, false if not
  //  console.log("eggsInCarton");
  //  console.log(eggsInCarton);
  //  console.log("cartonCapacity");
  //  console.log(cartonCapacity);
    if (eggsInCarton<cartonCapacity){
      console.log("You definitely have more room in the carton.");
      return false;
    }
    else{
      console.log("Your carton is completely full.");
      return true;
    }
} // end checkIfCartonIsFull

console.log(isCartonFull(7,12));
// Everything below is an attempt at writng a loop
// which fills up the carton. There are obviously several options for
// doing this, I think using a for loop is probably the most elegant
// but for the sake of time I'm going to leave this as-is.

// Getting carton size from user. there are obvious limitations to prompt
// only returning a string. For now we must assume that the carton is
// empty

/*switch(prompt("Which size is your carton","6, 12, or 18?").toUpperCase()){
  case "6":
    cartonCapacityUser = 6;
    break;
  case "12":
    cartonCapacityUser = 12;
    break;
  case "18":
    cartonCapacityUser = 18;
    break;
  default:
    console.log("Unfortunately, I'm not familiar with that carton size.");
    break;
}

do{
  if (isCartonFull(eggsInCartonUser,cartonCapacityUser) === true){
    console.log("Your egg carton is full, you cannot put any more in.");
  }
  else{
    console.log("You have more room in the egg carton. Let's fill up the carton.");
    eggsInCartonUser += 1;
    console.log("You've added one egg to your carton.");
  }
} while (isCartonFull(eggsInCartonUser,cartonCapacityUser)===false);

console.log("Your egg carton is now full!");


console.log("eggsInCartonUser");
console.log(eggsInCartonUser);
console.log("cartonCapacityUser");
console.log(cartonCapacityUser);*/
