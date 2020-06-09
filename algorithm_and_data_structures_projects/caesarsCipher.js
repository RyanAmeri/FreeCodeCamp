//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {
    const regExp = /[A-Z]/g;
    return [...str].map((letter) => 
        letter.match(regExp) ?
            letter.charCodeAt() < 78 ? 
                String.fromCharCode(letter.charCodeAt() + 13):
                String.fromCharCode(letter.charCodeAt() - 13):
            letter)
            .join("")

  }
