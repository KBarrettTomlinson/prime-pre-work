console.log("arrays.js code connected");
// write an array named 'people' that holds the following names: 'Albert', 'Dev', 'Ryan', 'Antoinette'
// uncomment the following line and ______ with the appropriate code
var people = ['Albert','Dev','Ryan','Antoinette'];
console.log(people);
// set the variable below equal to the first name in the array
// uncomment the following line and ______ with the appropriate code
var firstPerson = people[0];
console.log(firstPerson);
// set the variable below equal to the number of names in the array
// uncomment the following line and ______ with the appropriate code
var howManyPeople = people.length;
console.log(howManyPeople);
// set the variable below equal to the last name in the array
// uncomment the following line and replace ______ with the appropriate code
var lastPerson = people[howManyPeople-1];
console.log(lastPerson);

// write a line of code that adds 'Prince' to the array
people.push("Prince");
console.log(people);

// need to essentially re-run the variables after the numbers changed in order
// to print out the new values after pushing a new name!! Don't assume that
// Just becaues the values are different that the variable updated. 
howManyPeople = people.length;
console.log(howManyPeople);
lastPerson = people[howManyPeople -1];
console.log(lastPerson);
