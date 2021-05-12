let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);

let filterOnlyLetters = el => el.match(/[^0-9^ ]/g);

console.log(filterOnlyLetters('vegeta777'));
console.log(filterOnlyLetters('kenshifull777'));
console.log(filterOnlyLetters('h0l4 35t0 35 un t3x0 c0n num3r0s'));
