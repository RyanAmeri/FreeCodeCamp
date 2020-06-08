//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
function sumFibs(num) {
    return fibList(num).reduce((sum, value) => {
        if (value % 2 !== 0){
            sum += value;
        }
        return sum;
    }, 0)
  }

  const fibList = (num) => {
    const newArr = [0,1];
    for (let i = 0; i < num; i++){
        newArr.push(nextFib(newArr[i], newArr[i + 1]))
    }
    return newArr.filter((item) => item <= num);
  } 

  const nextFib = (num1, num2) => num1 + num2;                                                                                                                                                                                                                                                                                                                                       