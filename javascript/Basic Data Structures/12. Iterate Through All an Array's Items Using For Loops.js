function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i = 0, length1 = arr.length; i < length1; i++){
  	let el = arr[i];
  	if (el.indexOf(elem) == -1) {
  		// statement
  		newArr.push(el);
  	} else {
  		// statement
  		continue;
  	}
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));