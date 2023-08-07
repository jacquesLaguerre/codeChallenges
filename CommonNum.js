// Write a function that takes two arrays of numbers and returns a new array with the elements that are common to both arrays.

function ArrayOfNum (arr1, arr2){
  // Declared an empty array variable 
const CommonElements = [];

// Looping through the first array and check if each element is in the second array
for (const num of arr1){
  if (arr2.includes(num)){
    CommonElements.push(num)
  }
}
return CommonElements;
}

const arr1 = [1,2,3,4,5,6,7,8]
const arr2 = [2,4,6,8,10,12,16]

const commonArray = ArrayOfNum(arr1,arr2);
console.log(commonArray)

