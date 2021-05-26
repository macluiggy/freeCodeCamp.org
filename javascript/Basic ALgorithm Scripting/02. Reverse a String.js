function reverseString(str) {
	let strReverse = '';
	for(let i = str.length - 1, length1 = str.length; i >= 0; i--){
		let letter = str[i];
		strReverse += letter
	}
  return strReverse;
}

console.log(reverseString("hello"));