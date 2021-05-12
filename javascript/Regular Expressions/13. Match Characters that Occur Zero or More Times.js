// Only change code below this line
let chewieQuote = 'AAAAaaaaaaaaaaaaaieaaaaaaaaahAaa'
let chewieRegex = /Aa*/g; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result);

console.log('aaAAAaaaaAab'.match(/Aa*?/g));

//la difeencia entre + y * es que en el signo + los primeros n elementos de la regex que se repitan
//tienen que encajar, mientras que con el signo * los primeros n -1 elementos de la regex
//tienen que encajar
console.log('AAAaaaeee Aaeiiuuu'.match(/Aaeiiu*/g))

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/g;
let goRegexPlus = /go+/g;
console.log(soccerWord.match(goRegex))
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

console.log(soccerWord.match(goRegexPlus))
console.log(gPhrase.match(goRegexPlus));
console.log(oPhrase.match(goRegexPlus));