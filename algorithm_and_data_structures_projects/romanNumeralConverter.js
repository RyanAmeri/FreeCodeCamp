const nums = [1, 4, 5, 9, 10, 40, 50, 90, 100,
            400, 500, 900, 1000, 4000];
const syms = ['I', 'IV', 'V', 'IX', 'X', 'XL',
            'L', 'XC', 'C', 'CD', 'D', 'CM',
            'M'];

function convertToRoman(input) {
    if (input < 1 || input > 3999 )
        throw 'Input outside of acceptable range';
    let base = parseInt(input);
    let str = "";
    let m = 0;
    while (base){
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > base){
                m = i -1;
                break;
            }
          }
        let rept = Math.floor(base/nums[m]);
        for (let i = 0; i < rept; i++){
            str += syms[m];
        }
        base = base % nums[m];
    }
    return str;
   }
