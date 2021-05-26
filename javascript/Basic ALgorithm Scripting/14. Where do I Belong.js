function getIndexToIns(arr, num) {
	arr = [...arr, num]
	arr.sort((a, b) => a - b)
	let index = arr.indexOf(num)
	console.log(arr2)
	console.log(index)
	return index
}

console.log(getIndexToIns([3, 10, 5], 3));