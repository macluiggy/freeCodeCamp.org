function chunkArrayInGroups(arr, size) {
	let arr2 = [];
	while (arr.length > 0) {
		// statement
		let subArr = []
		for(let i = 0, length1 = size; i < length1; i++){
			let el = arr.shift()
			subArr.push(el);
		}
		arr2.push(subArr);
	}
	for(let i = 0, length1 = arr2.length; i < length1; i++){
		let subArr = arr2[i];
		for(let j = 0, length1 = subArr.length; j < length1; j++){
			let el = subArr[j];
			if (el === undefined) {
				// statement
				let index = subArr.indexOf(el);
				subArr.splice(index, 1)
			}
		}
	}
	console.log(arr2)
  return arr2;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);