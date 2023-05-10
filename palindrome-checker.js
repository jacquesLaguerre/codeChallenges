/*
Write a function that takes a string as input and returns true if the string is a palindrome and false otherwise. 
A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward 
and backward, ignoring spaces, punctuation, and capitalization.
*/

function palindrome(str) {

  let reverseWord = str.split("").reverse().join("");
  console.log(reverseWord)
  console.log(str)
  if (reverseWord.replace(' ', '') === str.replace(' ', '')){
    return true
  } else {
    return false 
  }
}

console.log(palindrome("racecar"));
