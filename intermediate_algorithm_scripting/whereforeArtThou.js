//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
function whatIsInAName(collection, source) {
    return collection
        .filter((item) => 
            Object.keys(source).every((prop) => 
                item.hasOwnProperty(prop) && item[prop] === source[prop] )
        );}
