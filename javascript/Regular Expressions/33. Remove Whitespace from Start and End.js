let hello = "   Hello, World!  ";
let wsRegex = /\s{2,}/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
let result2 = hello.match(wsRegex)
console.log(result)
console.log(result2)