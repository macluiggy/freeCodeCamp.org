const mult = (...args) => args.reduce((x, y) => x * y, 1);

console.log(mult(2,4,6,8,10));

const sumaNums = (...args) => {
	let result = 0;
	for(let i = 0, length1 = args.length; i < length1; i++){
		const num = args[i];
		result += num;
	}

	return result;
}
console.log(sumaNums(1, 2, 3, 4,100));

