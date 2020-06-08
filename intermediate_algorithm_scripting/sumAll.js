function sumAll(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const filledArr = [];
    for (let i = sortedArr[0]; i<= sortedArr[1]; i++){
        filledArr.push(i);
    }
    return filledArr.reduce((sum, value) => {
            sum += value;
            return sum;
        }, 0);
    
}
  

  