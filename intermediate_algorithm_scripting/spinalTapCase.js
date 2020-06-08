//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
function spinalCase(str) {
    return str
        .replace(/[_]/g, "")
        .replace(/[A-Z]/g, lowerReplace)
        .replace(/\s/g, whiteSpaceReplace)
  }
const lowerReplace = (letter, index, string) => 
    (index > 0 ? '-' : '') + letter.toLowerCase();
const whiteSpaceReplace = (letter, index, string) =>
  string[index + 1].includes("-") ? "" : "-";