let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex);
console.log(result); // Change this line

console.log('solo extrae los siguientes números: 1234567890'.match(/1234567890/));
console.log('el perro come comida de perro, pero no tengo tanta comida de perro'.match(/comida de perro/));