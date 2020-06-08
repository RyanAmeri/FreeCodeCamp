//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i])){
            return arr.slice(i);
        }
    }
    return [];
  }
//This works and is rather simple. Looking at solution, ES6 has a array.prototoype.findIndex() 
//which would have made this even simpler