//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
    const regExp = /[a-z0-9]/ig;
    const cleanStr = [...str].filter((letter) => letter.match(regExp))
        .join("")
        .toLowerCase();
    return [...cleanStr].every((letter, index, array) => 
        letter === array[array.length - index - 1])

  }
