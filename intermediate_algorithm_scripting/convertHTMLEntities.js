//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
const table = new Map([
    ['&', '&amp;'],
    ['"', '&quot;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ["'", '&apos;'],
]);

function convertHTML(str) {
    return [...str]
        .map((letter) =>
        table.has(letter)? table.get(letter) : letter )
        .join("")
    
  }