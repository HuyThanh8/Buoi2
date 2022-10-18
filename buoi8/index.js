let x = 20;
let y = 10;
let z = x++ + ++x - y-- - --y;
// false: 21 + 21 - 9 - 9 = 24
// true: 20 + 22 - 10 - 8 = 24
console.log(z);
console.log(x);
console.log(y);