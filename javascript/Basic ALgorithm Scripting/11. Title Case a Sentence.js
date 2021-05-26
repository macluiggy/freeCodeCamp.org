
function titleCase(str) {
	let arr = str.split(' ');
	let newStr = '';
	for(let i = 0, length1 = arr.length; i < length1; i++){
		let word = arr[i]
		if (i === 0) {
			newStr += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		} else {
			newStr += ` ${word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}`;
		}
	}
  return newStr;
}

console.log(titleCase("sHoRt AnD sToUt"));