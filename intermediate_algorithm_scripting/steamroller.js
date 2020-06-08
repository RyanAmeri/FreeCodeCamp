//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
function steamrollArray(arr) {
    let resArr = [].concat(...arr);
    return resArr.some(Array.isArray) ? steamrollArray(resArr) : resArr;
  }

  

