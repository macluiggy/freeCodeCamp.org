let sampleWord = "bana12";
let pwRegex = /(?=\w{4})(?=\w*\d{2})/g; // Change this line
let result = pwRegex.test(sampleWord);
let result2 = sampleWord.match(pwRegex);
console.log(result)