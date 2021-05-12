let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /e./g; // Change this line
let result = unRegex.test(exampleStr);
console.log(result);
console.log(exampleStr.match(unRegex))

console.log('el perro come comida de perro, pero no tengo tanta comida de perro'.match(/comida de perro/g));
console.log('el perro come comida de perro, pero no tengo tanta cOmida dE pErro'.match(/comida de perro/gi));
console.log(/per./i.test('el Perro come comida de perro, Pero no tengo tanta cOmida dE pErro'));

//In regular expressions, a "." does not match a dot, it matches any character, and one "." euqals to one charecter. Example:

var str="abcdef";
console.log( str.match(/./g) )   //output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log( str.match(/../g) )  //output: [ 'ab', 'cd', 'ef' ]
console.log( str.match(/.../g) ) //output: [ 'abc', 'def' ]