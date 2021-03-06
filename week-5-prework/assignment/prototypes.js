console.log("prototypes.js code sourced");

function Animal(first, last, type) {
    this.firstName = first;
    this.lastName = last;
    this.type = type;
}

// here's an example Animal:
var giantCactus = new Animal( "Giant", "Cactus", "Dog" );

// PART 1
// create a new animal named "somethingFun" with a first name of "Something"
//a last name of "Fun" and a type of "Cat"
var somethingFun = new Animal("Something", "Fun", "Cat");
console.log("for in loop to console log the contents of somethingFun");
for (var x in somethingFun){
  console.log(x);
  console.log(somethingFun[x]);
}
// PART 2
// console log out somethingFun's first and last name
console.log("somethingFun firstName");
console.log(somethingFun.firstName);
console.log("somethingFun lastName");
console.log(somethingFun.lastName);


// PART 3 (Hard Mode)
// add a method to somethingFun named "meow()" that console logs "moew" when called. ex: somethingFun.meow()
somethingFun.meow = function(){
  console.log("moew, ahem... meow");
};
console.log("call method somethingFun.meow");
somethingFun.meow();
// add another method to somethingFun named "isHappy" that receives a boolean argument "happy"
// within this method, check if "happy" is true
// if so, console log "purrrrrr"
// if not, console log "crabby face"
somethingFun.isHappy = function(happy){
  if(happy){
    console.log("purrrrrr");
  }
  else {
    console.log("crabby face");
  }
};
console.log("call method somethingFun.isHappy(true)");
somethingFun.isHappy(true);
console.log("call method somethingFun.isHappy(false)");
somethingFun.isHappy(false);


// DO NOT TOUCH CODE BELOW
// for purpose of the test files only
module.exports = {
  somethingFun: somethingFun
};
