/* 2. Write a function that takes an array of numbers 
and returns the sum of the squares of each number.
*/

// function squareOfNum(arr) {
 
//   let sum = 0;
//   for (let i = 0; i <= arr.length; i++)
//   {

//     sum += arr[i] * arr[i];
//   }
//   return sum;
// }
// const arr = [2,4,6];
// const result = squareOfNum(arr)
// console.log(result);


function sumOfSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}

const arr = [1, 2, 3, 4, 5];
const result = sumOfSquares(arr);
console.log(result);