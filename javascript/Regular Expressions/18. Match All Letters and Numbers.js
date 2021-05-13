// /\w/ = /[A-Za-z0-9_]/  => \w = [A-Za-z0-9_]

let quoteSample = "The_five_boxing_wizards_jump_quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result)