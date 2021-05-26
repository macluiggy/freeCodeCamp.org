let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result)

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
console.log(firstString.match(firstRegex))
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
console.log(notFirst.match(firstRegex));

console.log(/^El/.test('El man el loco El man esta loco'))
console.log('Alhfhfha madre'.match(/^a.+a/gi))
console.log('Alhfhfha madre'.match(/^a.+?a/gi))