//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

function addTogether(...args) {
  
    if (args.length > 1) {
      let a, b;  
      [a, b] = args;
      if (isNumber(a) && isNumber(b))
        return a + b;
      else 
        return undefined;
    } else { 
        //if Only one parameter is supplied
      
      let [c] = args;
        if (isNumber(c)) {
        return (d) => {
          if (isNumber(c) && isNumber(d))
            return c + d;
          else
            return undefined;  
      }
    }
  }
}

  const isNumber = (num) => 
    typeof num === 'number' && isFinite(num);

