//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
function truthCheck(collection, pre) {
    return collection.every((obj) => obj.hasOwnProperty(pre) && obj[pre]
    )
  }