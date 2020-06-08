//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
function translatePigLatin(str) {
    const regex = /a|e|i|o|u/ig;
    const index = str.search(regex);
    if (index === -1)
        return str + "ay";
    else if (index){
        const fPart = str.slice(0,index);
        const lPart = str.slice(index);
        return lPart + fPart + "ay"
    }
    else {
        return str + "way";
    }

  }