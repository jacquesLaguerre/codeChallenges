/* 1. Write a function that takes a string and returns a new string with the letters in alphabetical order.
 For example, "hello" would become "ehllo". */

function alphabeticalOrder(str) {
  const alphabeticalWord = str.split("").sort().join();
  console.log(alphabeticalWord);
}
console.log(alphabeticalOrder("hello"))