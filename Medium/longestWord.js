/* 3. Write a function that takes a sentence (string) 
and returns the longest word in the sentence.
*/

function longestWord (str){
const string = str.split('');
const longestWord = 0;
for (let i = 0; i < string.length; i++){
  if (string[i].length > longestWord){
    longestWord = string[i].length
  }
}
return longestWord;

}

console.log(longestWord('My Name is Jacques Laguerre'));