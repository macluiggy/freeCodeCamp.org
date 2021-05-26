let ohStr = "Ohhhhhh  no";
let ohRegex = /oh{3,6}\s\sno/gi; // Change this line
let result = ohRegex.test(ohStr);
console.log(result)
console.log(ohStr.match(ohRegex))