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
