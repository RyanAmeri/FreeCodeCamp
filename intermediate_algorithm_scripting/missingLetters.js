//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
function fearNotLetter(str) {
   for (let i = 0; i < str.length -1; i++){
       if (!checkTwoChar(str[i], str[i+1]))
        return String.fromCharCode(str.charCodeAt(i) + 1)
   }
  }
const checkTwoChar = (letter, nextLetter) => 
  nextLetter.charCodeAt() === letter.charCodeAt() + 1 ? true : false;
  