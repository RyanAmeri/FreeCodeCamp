function myReplace(str, before, after) {
    let regexp = /[A-Z]/g;
    const capitalChar = before.indexOf(before.match(regexp));
    return capitalChar === -1 ? 
        str.replace(before, after) : 
        str.replace(before, replaceCase(capitalChar, after));
  }

const replaceCase = (num, string) =>
  string.slice(0, num) + string[num].toUpperCase() + string.slice(num + 1);

 