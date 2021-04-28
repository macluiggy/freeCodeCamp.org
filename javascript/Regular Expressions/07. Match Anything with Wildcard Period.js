let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /e./g; // Change this line
let result = unRegex.test(exampleStr);
console.log(result);
console.log(exampleStr.match(unRegex))

console.log('el perro come comida de perro, pero no tengo tanta comida de perro'.match(/comida de perro/g));
console.log('el perro come comida de perro, pero no tengo tanta cOmida dE pErro'.match(/comida de perro/gi));
console.log(/per./i.test('el Perro come comida de perro, Pero no tengo tanta cOmida dE pErro'));