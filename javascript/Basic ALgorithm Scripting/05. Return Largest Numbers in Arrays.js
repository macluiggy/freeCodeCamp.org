function largestOfFour(arr) {
	
	let arr2 = [];
	for(let i = 0, length1 = arr.length; i < length1; i++){
		let subArr = arr[i];
		let largest = -100000*1000000;
		for(let i = 0, length1 = subArr.length; i < length1; i++){
			let el = subArr[i];
			if (el > largest) {
				// statement
				largest = el
			}
		}
		arr2.push(largest)
	}
	return arr2
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))