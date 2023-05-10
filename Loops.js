// // for (let i = 0; i < 5; i++){
// //   console.log('Hello World')
// // }
// ----------------------------------------------------
/*  create a function that takes an array of numbers & return both min and max in that order. (use a loop)
const newArray = [1,2,3,4,5,6,7,8,9] */

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArray = [];

// function addArr() {
//   for (let i = 0; i < arr.length; i++) {
//     newArray[i] = arr[i];
//   }
//   console.log(newArray);
// }

// addArr();
// -------------------------------------------------

// Iteration practice with nested loops

// for (let i = 0; i < 5; i++) {
//   console.log(`The current value of i is ${i}.`);
//   for (let j = 0; j < 5; j++) {
//     console.log(`j is ${j}`);
//   }
//   console.log("----------")
// }
/*------------------------------------------------------------------------------------------------------*/
// Creating a multiplication table

// for (let i = 0; i < 11; i++){
//   // This loop goes from 0-10
//   for (let j = 0; j < 11; j++){
//     // This loop does the same thing except the value i is going to stay the same after it goes through its iteration it'll go on and increase by one.
//     console.log(`${i} X ${j} = ${i * j};`)
//   }
// }
/*------------------------------------------------------------------------------------------------------*/
// Addition Table from 1 to 9
// for (let i = 0; i < 10; i++){
//   for (let j=0; j<10; j++){
//     console.log(`${i} + ${j} = ${i + j}`)
//   }
// }
/*------------------------------------------------------------------------------------------------------*/
// While Loop function

// function minArray() {
//   let i = 10;
//   const myArray = [];
//   while (i >= 6) {
//     myArray.push(i);
//     i--;
//   }
// return myArray
// }
// const result = minArray();
// console.log(result);
/*------------------------------------------------------------------------------------------------------*/
// ITERATING THROUGH ARRAY BY ADDING ELEMENTS INSIDE AN EMPTY ARRAY
// Addition Table from 1 to 9
// function descendingPush() {
//   let i = 5;
//   const arr = [];
//   while (i >= 1) {
//     arr.push(i);
//     i--;
//   }
//   return arr;
// }

// const result = descendingPush();
// console.log(result);


// const myArray = [];
// let i = 5;
//  {
// while (i >= 0){
//   myArray.push(i);
//   i--
// }

// }

// console.log(myArray)

// const arr = []

// for (let i = 1; i < 6; i++){
// arr.push(i)
// }
// console.log(arr)


// const myArray = [];

// for (let i = 1; i < 10; i+= 2){
//   myArray.push(i)
// }
// console.log(myArray)

// const myArray = [];
// for (let i = 9; i>=1; i-=2){
//   myArray.push(i)
// }
// console.log(myArray)
/*------------------------------------------------------------------------------------------------------*/
// Addition Table from 1 to 9
// GETTING THE SUM OF  THE LENGTH OF AN ARRAY USING A FOR LOOP
// const myArr = [2, 3, 4, 5, 6]
//  var total = 0;

//  for (let i = 0; i < myArr.length; i++ ){
//   total += myArr[i]
//  }
// console.log(total)

/*------------------------------------------------------------------------------------------------------*/
// NESTED LOOP
// function multiplyAll(arr){
//   let product = 1;
//   for (let i = 0; i<arr.length; i++){
//   for (let j  = 0; j<arr[i].length; j++){
//     product *= arr[i][j];
//   }
//   }
//   return product
// }
  
// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

/*------------------------------------------------------------------------------------------------------*/
// DO WHILE LOOP

// const myArray = [];
// let i = 10;

// do {
//   myArray.push(i);
//   i++
// }
// while (i < 10)

// console.log(myArray)  

/*------------------------------------------------------------------------------------------------------*/
//REPLACING LOOPS USING RECURSION 

// function sum(arr, n) {
 
// if (n<=0){
//   return 0
// }else {
//   return sum(arr, n-1) + arr[n -1]
// }

// }
// console.log (sum([1], 0))

