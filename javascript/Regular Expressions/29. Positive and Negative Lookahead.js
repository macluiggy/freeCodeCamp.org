let sampleWord = "bana12";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/g; // Change this line
let result = pwRegex.test(sampleWord);
let result2 = sampleWord.match(pwRegex);
console.log(result)  

console.log('El perr0'.match(/^.*(?=\d)/gi))
console.log(/^.*(?=\d)+/gi.test('El perr00'))
console.log(/^.*(?=\d)+/gi.test('El perro'))

console.log(/^.*(?!\d)+/gi.test('El gat0'))
console.log(/^.*(?!\d)+/gi.test('El gato'))

console.log("JavaScript".search(/script/ui))