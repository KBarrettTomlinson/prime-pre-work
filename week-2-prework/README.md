
## Week 2 Assignment, Pt.1
## Getting User Input, Conditionals, and Scope
Animal guessing game. When the page is loaded the user is prompted to guess an animal. Once they submit their answer the program will either tell them that they correctly guessed the animal or that they should try again.

### Topics Covered
* The prompt function and user input
* Creating a variable
* Conditional statement
* Functions
* Scope

### Step 1
Create a variable that takes in user input via the prompt function that asks "Of what animal am I thinking?". Write a conditional statement (if/else) that alerts "How did you know?!" if the user guesses "turtle" and alerts "Try again." if the user did not guess "turtle" correctly.

### Step 2
Refactor your code above into a function called `animalGuess`, using the scaffolding code provided. Think about the variable `animalName` and how it is different than `animal`. Answer the question: What will `console.log(animalName)` log outside the `animalGuess` function?

### Files Provided
* index.html - Sources the JavaScript file (`script.js`). There isn't much happening here and you are not required to make changes to this file.
* alerts.js - This is where you will add your code. We have provided some scaffolding code and comments to help you get started.

## Week 2 Assignment, Pt.2
We are going to create an application where you create a variable, and then create a function that doubles it! But there is a catch, its going to not just double numbers, but also strings! For example, if the checked variable is a number, like 2, it will double it to 4. But if a string is entered, like "SuperCat", it would double it to "SuperCatSuperCat". Neat right? Also, let's make it smart enough to know if it recieves an Object. If it does detect an Object, have the console log say "everything is an object". Finally, if it detects one of the two boolean values, let's have a special case for them as well. If the value is true, lets log "super-duper true", if false, have it say "I won't double this". 

If NONE of these conditions are true, lets have the console log say "I can't double this".

In the provided .JS file called 'types.js', update the code in the flagged spots to have the application function as noted.

### Files Provided
* index.html - Sources the JavaScript file (`script.js`). There isn't much happening here and you are not required to make changes to this file. Note that this is the same index.html as mentioned in the previous portion of the assignment.
* types.js - This is where you will add your code. We have provided some scaffolding code and comments to help you get started. Replace the flags with the code that completes the functionality mentioned above.

## Week 2 Assignment, Pt.3 - Optional Pro Mode!
Check out the scope.js file provided in the folder. In there, you will find a function, that when run will produce a couple of different numbers. For this assignment, work through the code without the use of the computer. The objective is to think critically about how the code is executed and see if you can figure out what the answer is for each of the two console logs. This will require you to stretch your understanding of Functions, Scope, and how Variables work. 

This is a very difficult assignment for your first week with Javascript, so don't get frustrated if you test the code out, and don't come to the same conclusion as the code did. Instead, try to work through why the answers are the way they are. If you got them right, then you should order up some Pizza and celebrate your understanding of these difficult topics!

### Files Provided
* scope.js - Open up the file and take a look at it. See if you can figure out how it all works. Then try to figure out what the values are that would be written in the console log statements. 

Once you have completed the work for the week, make sure to check your Repo in and submit against the Prime Academy Assignment Application! Good Luck!
