//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

const DNAMap = new Map([
    ['A', 'T'],
    ['T', 'A'],
    ['C', 'G'],
    ['G', 'C'],
]);

function pairElement(str) {
    const resultArr = [];
    return [...str].map((letter, index) => {
        resultArr[index] = [];
        resultArr[index].push(letter);
        resultArr[index].push(DNAMap.get(letter));
        return resultArr[index];
    })
    
  }
