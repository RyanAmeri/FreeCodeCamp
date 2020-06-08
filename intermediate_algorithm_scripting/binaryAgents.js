//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
const toAscii = (input) => String.fromCharCode(parseInt(input, 2).toString(10));

function binaryAgent(str) {
    return str.split(" ")
        .map((item) => toAscii(item))
        .join("")
  }