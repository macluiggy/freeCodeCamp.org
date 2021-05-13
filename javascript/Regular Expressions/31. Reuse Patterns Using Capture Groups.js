let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/g; // Change this line
let result = reRegex.test(repeatNum);
let resutl2 = repeatNum.match(reRegex);
console.log(result)
console.log(resutl2)