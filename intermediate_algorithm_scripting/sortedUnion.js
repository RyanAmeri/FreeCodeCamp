//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
function uniteUnique(...arr) {
    const newArr = [];
    arr.forEach((smallArr) => {
        smallArr.forEach((letter) => {
            if (!newArr.includes(letter))
                newArr.push(letter);
        })
        
    })
    return newArr;
  }