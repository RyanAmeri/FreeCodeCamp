//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
// Formula is: T = 2*pi*sqrt(r^3/GM) where r = earthRadius+avgAlt

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map((item) => {
        const newItem = new Map();
        const r = earthRadius + item["avgAlt"];
        const t = 2 * Math.PI * Math.sqrt((r ** 3)/GM);
        newItem.set('name', item["name"]);
        newItem.set('orbitalPeriod', t );
        return newItem;
    })

    
  }
// Used Map instead of creating an object. Doesn't pass the test but is better