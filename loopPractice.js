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

// Factorial Calculator:
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
