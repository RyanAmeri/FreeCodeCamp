//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
function sumPrimes(num) {
    return primeList(num).reduce((sum, value) => {
            sum += value;
        return sum;
    }, 0)
  }

  const primeList = (num) => {
      const primeArr = [];
      for (let i = 1; i <= num; i++){
          if (!primeArr.includes(nextPrime(i)))
            primeArr.push(nextPrime(i))
      }

      return primeArr.filter((item) => item <= num)
    
  } 

  const nextPrime = (num) => {
      for (let i = num + 1; i < Infinity; i++){
        if (isPrime(i))
            return i;
      }

  } 

  const isPrime = (num) => {
      let flag = true;
      for (let i = 2; i < num; i++){
        if (num % i === 0){
            flag = false;
            break;
        }
      }
      return flag;
  }