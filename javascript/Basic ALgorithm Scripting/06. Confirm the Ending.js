function confirmEnding(str, target) {
	let l1 = target.length
	let l2 = str.length
	let endLetter = str.substring(l2 - l1, l2);
	console.log(endLetter)
	console.log(target)
	return endLetter == target
}

console.log(confirmEnding("Bastian", "n"))