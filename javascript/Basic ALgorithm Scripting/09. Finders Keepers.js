function findElement(arr, func) {
  let num = 0;
  for(let i = 0, length1 = arr.length; i < length1; i++){
  	let el = arr[i];
  	if (func(el)) {
  		// statement
  		return el;
  	}
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));