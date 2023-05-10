// function checkScope() {
//   let i = 'function scope';
//   if (true) {
//     i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// } let i
// console.log(checkScope())


// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
//   // Only change code below this line
// Object.freeze(MATH_CONSTANTS)

//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch(ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }



// const PI = freezeObj();
// console.log(freezeObj)


// const s = [5, 6, 7];
// // s = [1, 2, 3];
// s[2] = 45;
// console.log(s);


// -----------------------------//
// Mutate an Array Declared with const
// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line
// s[0] = 2;
// s[1] = 5;
// s[2] = 7;
//   // Using s = [2, 5, 7] would be invalid

//   // Only change code above this line
// }
// editInPlace(s);


// ------------------------//
// const myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1,2],[3,4,5]));


//------------------------//
// Default Parameters 
// const increment = (number, value = 1) => number  + value;
// console.log(increment(5))


// ----------------- //
// Rest Parameter collects multiple elements and condenses into a single array element 

// const sum = (...args) => {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }
// console.log(sum(1, 2, 3));


function multiply (x,y) {
  return (x * y)
}

console.log(multiply(3,6))