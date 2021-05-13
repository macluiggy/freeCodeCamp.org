let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding))
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
console.log(result);
console.log('laPalabraTieneQueTerminarEnNúmero1234567890'.match(/\d*$/g))
console.log('1a primera letra de este string tiene que ser una letra o un numero y la ultima un numer0'
	.match(/^\w.+\d$/gi))