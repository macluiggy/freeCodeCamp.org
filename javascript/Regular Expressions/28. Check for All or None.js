let favWord = "favorite";
let favRegex = new RegExp('favou?rite')
let result = favRegex.test(favWord);
console.log(result);