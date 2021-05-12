// /\w/ = /[A-Za-z0-9_]/  => \w = [A-Za-z0-9_]

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result)