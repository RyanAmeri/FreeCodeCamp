//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
function smallestCommons([num1, num2]) {
    const smallNum = smaller(num1, num2);
    const largeNum = larger(num1, num2);
    let nextCM;
    for (let i = 1; i < Infinity; i++){
        nextCM = i * smallNum * largeNum;
        if (isDivisible(smallNum, largeNum, nextCM))
            return nextCM;
    }

  }
  const smaller = (a, b) => a < b ? a : b;
  const larger = (a, b) => a < b? b : a;
  const isDivisible = (a, b, num) => {
      let flag = true;
      for (let i = a; i <= b; i++){
          if (num % i !== 0){
              flag = false;
              break;
          }
      }
      return flag;
  }
