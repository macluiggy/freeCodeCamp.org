function bouncer(arr) {
	let arr2 = arr.filter(el => {
		return !!el
	})
	return arr2
}

console.log(bouncer([7, "ate", "", false, 9]));

/*function bouncer(arr) {
	let arr2 = []
	arr.forEach( el => {
		// statements
		if (el) {
			// statement
			arr2.push(el)
		} 
	});
	return arr2
}*/