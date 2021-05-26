let favWord = "favourite";
let favRegex = new RegExp('favou?rite')
let result = favRegex.test(favWord);
console.log(result);

console.log(/^[aeiou]+?/g.test('arrrraattaa'))
//el signigicado en ingles y español es el mismo
let spaAndEng = (palabra, word) => {
	let regex = new RegExp(`[${word}]?`)
	console.log(regex);
	return regex.test(palabra);
}

console.log(spaAndEng('perro', 'dog'));