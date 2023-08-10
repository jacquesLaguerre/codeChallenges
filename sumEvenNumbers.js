// Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

const numbersArray = [1,2,3,4,5,6,7,8,9,10]

function sumOfEvenNumbers (numbers) {
let sum = 0;

for (let i = 0; i < numbers.length; i++ ){
if (numbers[i] % 2 === 0){
sum += numbers[i]
}
}
return sum
}

const result = sumOfEvenNumbers(numbersArray)
console.log('Sum of Even Numbers is :', result)