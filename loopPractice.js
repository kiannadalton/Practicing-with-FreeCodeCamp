// Longest Word Finder
// User Stories:
// You should create a function named findLongestWordLength that takes a string as an argument.
// The function should return the length of the longest word in the string.

// My Code:
function findLongestWordLength(sentence) {
  let longestWord = "";
  let sentenceArray = [];
  sentenceArray = sentence.split(" ");
  console.log(sentenceArray);
  for (let i = 0; i < sentenceArray.length; i++) {
    let word1 = sentenceArray[i];
    if (word1.length > longestWord.length) {
      longestWord = word1;
    }
  }
  console.log(longestWord);
  return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped the lazy dog"));

// Factorial Calculator
// My Code:
let num = 5;
function factorialCalculator(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

// Mutations Algorithm
// User Stories:
// Create a function named mutation that takes an array as its argument.
// mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
//  mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.

// My Code:
function mutation(array) {
  if (array.length === 2) {
    let [element1, element2] = array;
    let lowerCaseEle1 = element1.toLowerCase();
    let lowerCaseEle2 = element2.toLowerCase();
    let splitElement1 = lowerCaseEle1.split("");
    let splitElement2 = lowerCaseEle2.split("");
    let similarLetters = [];

    for (const char of splitElement1) {
      if (splitElement2.includes(char)) {
        similarLetters.push(char);
      }
    }

    for (const char2 of splitElement2) {
      if (similarLetters.includes(char2)) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  } else {
    console.log(
      "The array is too long. Please only add 2 elements to the array."
    );
  }
}

console.log(mutation(["hello", "Hello"])); //true
console.log(mutation(["Mary", "Army"])); //true
console.log(mutation(["Tiger", "Zebra"])); //false

// Split Array into a Two-Dimensional Array
// User Stories:
// Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.

// My Code:
function chunkArrayInGroups(arr1, num1) {
  let twoDimArray = [];
  for (let i = 0; i < arr1.length; i) {
    let newArray = arr1.splice(i, num1);
    twoDimArray.push(newArray);
  }
  return twoDimArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

// Build a Profile Lookup:
// User Stories:
// You should create a function named lookUpProfile that takes a name and a property as arguments.
// You should retrieve contact information from the provided contacts array.
// If the function receives a contact name and the property exists on the related contact, then the property's value should be returned.
// If the name passed to the function does not match any contacts in the contacts array, then the function should return "No such contact".
// If the property does not exist on a found contact, then the function should return "No such property".
// conatcts object provided by FreeCodeCamp

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// My Code:

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      if (contacts[i][prop] == undefined) {
        return "No such property";
      } else {
        for (const key in contacts[i]) {
          if (key == prop) {
            return contacts[i][prop];
          } else {
            continue;
          }
        }
      }
    } else {
      continue;
    }
  }
  return "No such contact";
}
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Akira", "address"));

// Largest Number Finder:
// User Stories:
// You should create a function largestOfAll that takes an array of arrays as an argument.
// The function should return an array containing the largest number from each sub-array.

// My Code:
function largestOfAll(arr) {
  let largestNums = [];
  for (let i = 0; i < arr.length; i++) {
    let indexArr = arr[i];
    let bigNum;
    for (let i = 0; i < indexArr.length; i++) {
      if (bigNum != undefined) {
        if (indexArr[i] > bigNum) {
          bigNum = indexArr[i];
        } else {
          continue;
        }
      } else {
        bigNum = indexArr[i];
      }
    }
    largestNums.push(bigNum);
  }
  return largestNums;
}

console.log(
  largestOfAll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

console.log(
  largestOfAll([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
