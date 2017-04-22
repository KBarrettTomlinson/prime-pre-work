console.log("whileLoop code sourced");

function fillCrate( maxCapacity ){
  // this function received an argument of "maxCapacity"
  // crateMax is the maximum widget capacity of the crate
  // crates start empty
  var widgets = 0;
  var spaceAvailable = widgets<maxCapacity;
  // write a while loop that puts more widgets in the crate until it is full
  // return the number of widgets added to the crate in the while loop
  while(spaceAvailable){
    widgets += 1;
    console.log("You've added widget number " + widgets +"!");
    console.log("Only " + (maxCapacity - widgets) + " more to go!");
    spaceAvailable = widgets<maxCapacity;
    // I don't complete understand why I need to re-evaluate this variable
    // Wouldn't the variable be re-evaluated when it is checked again at the
    // beginning of the while loop?
  }
  console.log(widgets);
  return widgets;
} // end fillCrate

console.log(fillCrate(37));
