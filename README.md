# Practicing-with-FreeCodeCamp

These are some of the labs I completed when practicing with FreeCodeCamp. Labs are assignments where I am provided a user story and required to write code that executes the given task.

To assist in viewing this repository, I have added the name of the file and the corresponding user story below.

## emailMasker.js

### Demonstrates use of: .slice, .repeat, .indexOf, concatenation, and use of local variables

In this lab, you will mask the username part of an email address with asterisks. Masking is a term used to hide or replace sensitive information with asterisks or other characters.

For example, if the email address was myEmail@email.com, then the masked email address will be m**\***l@email.com.

Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Create a function named maskEmail that takes email as an argument.
Inside the function, you should mask the email and append the domain name to it. Remember that you can use methods like slice, repeat, indexOf or even replace to help you.
Outside the function, declare a variable named email to store the email address you want to mask.
Call the maskEmail function with the email variable and output the result to the console.
maskEmail("apple.pie@example.com") should return "a**\*\*\***e@example.com".

## recordCollection.js

### Demonstrates use of: objects, nested objects, array methods, if and if/else statements

Build a Record Collection
You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.

## loopPractice.js

### Demonstrates use of: for loop, for...of loop, for...in loop, .split, .length, assignment operators, if/else statements, .includes, .toLowerCase, two-dimensional array, .splice, spread operator (...), .repeat, Math.random, Math.floor

This file is a collection of various labs I did using loops.

## gradebookApp.js

### Demonstrates use of: for loop, operators, if and if/else statements, local variables, template literals

Build a Gradebook App
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.

You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:

Score Range Grade
100 "A+"
90 - 99 "A"
80 - 89 "B"
70 - 79 "C"
60 - 69 "D"
0 - 59 "F"
You should have a function named hasPassingGrade that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.

The hasPassingGrade function should use the getGrade function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".

You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:

"Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
"Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.

## inventoryManagement.js

### Demonstrates use of: if/else statements, for loops, .toLowerCase(), .splice, template literals, concatenation

Build an Inventory Management Program
In this lab, you will build an inventory management program that will allow you to add, update, find and remove products from the inventory. You will use an array of objects to represent your inventory, where each object will have name and quantity as the keys.

User Stories:

You should declare an empty array named inventory that will store product objects having a key name with the value of a lowercase string, and a key quantity with the value of an integer.

You should create a function named findProductIndex that takes the product name as its argument and returns the index of the corresponding product object inside the inventory array. The function should always use the lowercase form of the product name to perform the search. If the product is not found, the function should return -1.

You should create a function named addProduct that takes a product object as its argument.

If the product is already present in the inventory, the addProduct function should update its quantity value and log to the console the product name followed by a space and quantity updated.

If the product is not present in the inventory, the addProduct function should push the product to the inventory array and log the product name to the console, followed by a space and added to inventory.

You should create a function named removeProduct that takes the product name and quantity as its arguments.

The removeProduct function should subtract the passed quantity from the corresponding product object inside the inventory and log the string Remaining <product-name> pieces: <product-quantity> to the console, where <product-name> should be replaced by the product name, and <product-quantity> should be replaced by the product quantity.

If the quantity after the subtraction is zero, removeProduct should remove the product object from the inventory. If the quantity in the inventory is not enough to perform the subtraction, the removeProduct function should log the string Not enough <product-name> available, remaining pieces: <product-quantity> to the console.

If the product to remove is not present in the inventory, the removeProduct function should log <product-name> not found to the console.

## bookOrganizer.js

### Demonstrates use of: if/else statements, .filter, .sort

User Stories:

You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.

Your books array should have a minimum of three objects.

You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.

The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.

The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.

The sortByYear function should return 0 if both releaseYear values are equal.

You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.

You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lecture that the sort() method will sort the array in place. This means the filteredBooks array will be mutated.
