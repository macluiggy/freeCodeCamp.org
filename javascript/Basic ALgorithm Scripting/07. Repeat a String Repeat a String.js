function repeatStringNumTimes(str, num) {
	let repeatedStr = '';
  for(let i = num; i > 0; i--){
  	repeatedStr += str;
  }
  return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));