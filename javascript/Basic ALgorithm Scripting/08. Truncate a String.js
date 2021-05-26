function truncateString(str, num) {
	let truncatedStr = '';
  if (str.length > num) {
  	// statement
  	for(let i = 0, length1 = num; i < length1; i++){
  		let letter = str[i]
  		truncatedStr += letter;
  	}
  	truncatedStr += '...';
  	return truncatedStr;
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));