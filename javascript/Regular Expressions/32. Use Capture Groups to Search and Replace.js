console.log("free Code Camp".replace(/(\w+)\s(\w+)\s(\w+)/, '$2 $3 $1'))
console.log("Code Camp".replace(/(\w+)\s\1/, '$2 $1'))

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result)