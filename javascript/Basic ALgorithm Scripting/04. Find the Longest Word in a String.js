function findLongestWordLength(str) {
	let arr = str. split(' ');
	console.log(arr)
	let longest = '';
	arr.forEach( word => {
		// statements
	 	if (word.length > longest.length) {
	 		// statement
	 		longest = word;
	 	}
	});
	return longest.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))