let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]./gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);
console.log(result.length);

let names = ['Angel', 'Fernando', 'Angulo', 'Coveña'];
let namesAn = []
for(let i = 0, length1 = names.length; i < length1; i++){
	const name = names[i];
	namesAn.push(name.match(/an/gi));
}
console.log(namesAn)
