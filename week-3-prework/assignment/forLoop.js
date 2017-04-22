console.log("forLoop.js code sourced");

function shoesOnTheBus( kidsOnTheBus ){
  // this function accepts the number of kids on the bus
  // assume each kid on the bus is wearing 2 shoes
  // write a for loop that counts how many shoes are on the bus
  // this function should return the number of shoes on the bus
  var numberOfShoes = 0;
  for(kidsIteration=1;kidsIteration<=kidsOnTheBus;kidsIteration++){
    console.log(kidsIteration);
    console.log(kidsOnTheBus);
    console.log(numberOfShoes);
    numberOfShoes = numberOfShoes + 2;
  }
  return numberOfShoes;


} // end shoesOnTheBus

console.log(shoesOnTheBus(55));
