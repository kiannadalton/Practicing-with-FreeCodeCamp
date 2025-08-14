# Practicing-with-FreeCodeCamp

These are some of the labs I completed when practicing with FreeCodeCamp. Labs are assignments where I am provided a user story and required to write code that executes the given task.

To assist in viewing this repository, I have added the name of the file and the corresponding user story below.

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
