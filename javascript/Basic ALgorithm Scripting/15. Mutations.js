/*let sortString = str => str.split('').sort().join('');

function mutation(arr) {
	//let word1 = sortString(arr[0])
	//let word2 = sortString(arr[1])
	let word1 = arr[0].toLowerCase().split('').sort().join('');
	let word2 = arr[1].toLowerCase().split('').sort().join('');
	let regex = new RegExp(word2, 'gi')
	//console.log(word1, word2)
	console.log(regex)
	console.log(word1, word2)
	let test = regex.test(word1);
	console.log(test)
  return test;
}

mutation(["Mary", "Army"]);*/

function mutation(arr) {
	let arr1 = []//array donde se guardara la palabra filtrada
	for(let i = 0, length1 = arr[0].length; i < length1; i++){//itera por el la primera palabra del primer elemento del arr
		let letter1 = arr[0][i].toLowerCase();//cada palabra a lower case
		for(let i = 0, length1 = arr[1].length; i < length1; i++){//itera por el la segunda palabra del segundo elemento del arr
			let letter2 = arr[1][i].toLowerCase();//cada palabra a lower case
			if (letter1 === letter2) {// si la x  letra del primer elemento del array es igual a la y letra del segundo
				// statement
				arr1.push(letter1);//añade esa letra al arr1
			}
		}
	}
	let word1 = [...new Set(arr1.sort())].join('');//remueve los elementos repetidos de arr1 y conviertela a un string
	let word2 = [...new Set(arr[1].toLowerCase().split('').sort())].join('');//se hace lo mismo con la segunda palabra

	console.log(word1,word2)
	return word1 === word2//returna true o false dependiendo del resultado de ambas
}

console.log(mutation(["Mary", "Aarmy"]));