function factorialize(num) {
	if (num <= 0) {
		// statement
		return 1
	}
	return num * factorialize(num - 1)
}

console.log(factorialize(5));