/**
Object Literals
**/

//Declare Variables
var myLiteralBooks = [];
var myObjectBooks = [];

function threeBooks() {
  // Create 3 book objects with object literal syntax. Books should have
  // properties for title, author, and pageCount
  // Write code here
  bookOne = {
    title: "God Emperor Of Dune",
    author: "Herbert, Frank",
    pageCount: 423
  };
  bookTwo = {
    title: "Hard-Boiled Wonderland And The End Of The World",
    author: "Murakami, Haruki",
    pageCount: 400
  };
  bookThree = {
    title: "How to Be Here",
    author: "Bell, Rob",
    pageCount: 210
  };
  // Add a property of haveRead to each book object you created.
  // This should be set to true or false
  // Write code here
  bookOne.haveRead = false;
  bookTwo.haveRead = true;
  bookThree.haveRead = true;

  // Store these objects in an array called books
  // Write code here
  var books = [bookOne,bookTwo,bookThree];
  // return this array
  return books;
}
// End threeBooks function

function fixLiteralSyntax() {
  // Fix the problems with our object literal
  avengersMovie = {
      name: "Avengers",
      runtime: "143 mins",
      releaseYear: 2012,
      director: "Joss Whedon"
  };
  // return corrected object
  return avengersMovie;
}
// End fixLiteralSyntax function

/**
Object Constructors
**/

// Write a constructor function to create Book objects with the same four properties as above.
// Write code here
function Book(title,author,pageCount,haveRead){
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}
// End Book constructor function

function createBooksWithConstructor() {
  // Create 3 new books using this constructor function.
  // Write code here
  var bookOne = new Book("Gilead", "Robinson, Marilyn", 247, true);
  var bookTwo = new Book("The Seven Storey Mountain", "Merton, Thomas", 462, false);
  var bookThree = new Book("The Year Of Magical Thinking", "Didion, Joan", 227, true);
  // Store them in an array called books
  // Write code here
  var books = [bookOne,bookTwo,bookThree];
  // return our array of books
  return books;
}

//Console logs
console.log("objects.assignment.js code sourced");
//Call threeBooks and assign it to the variable myBooks
console.log("Call threeBooks and assign it to the variable myLiteralBooks");
myLiteralBooks = threeBooks();
console.log("Display myLiteralBooks array");
console.log(myLiteralBooks);
console.log("For loop that displays contents of myLiteralBooks array");
for (i = 0; i < myLiteralBooks.length; i++){
  console.log(myLiteralBooks[i]);
}
console.log("Call fixLiteralSyntax function");
console.log(fixLiteralSyntax());
console.log("Call createBooksWithConstructor and assign it to the variable myObjectBooks");
myObjectBooks = createBooksWithConstructor();
console.log("Display myObjectBooks array");
console.log(myObjectBooks);
console.log("For loop that displays contents of myObjectBooks array");
for (i = 0; i < myObjectBooks.length; i++){
  console.log(myObjectBooks[i]);
}


// -- DON'T TOUCH CODE BELOW --
module.exports = {
  threeBooks: threeBooks,
  fixLiteralSyntax: fixLiteralSyntax,
  Book: Book,
  createBooksWithConstructor: createBooksWithConstructor
};
