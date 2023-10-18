/* Reverse a String:
Write a function that takes a string as input and returns the string in reverse order. For example, if the input is "hello", the function should return "olleh". */




function reverseString (str){
let splitString = str.split("")
let reverseArr = splitString.reverse("")
let joinArr = reverseArr.join("")
return joinArr
}

console.log(reverseString("hello"))