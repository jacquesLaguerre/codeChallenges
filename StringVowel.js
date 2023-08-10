//  Write a function that takes a string and returns the number of vowels in the string.


// function vowels (str) {




//   Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;
  
//   return vowels;

// }

// console.log(vowels('abscdefghijklmnop'));


// ---------------------------------------------------------------------------
// Array.prototype.filter was used to filter the array to contain only vowels and the length property contain the number of vowels 


const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

  console.log(countVowels('abcdefghijklmnopqrstuvwxyz'));
