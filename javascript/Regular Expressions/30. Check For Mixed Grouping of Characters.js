let myString = "Franklin cr7 Roosevelt";
let myRegex = /(Franklin \w.+|Eleanor) Roosevelt/gi; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result)

console.log('el niño corre'.match(/(el|la|los|las)\sniñ(o|a)s?.*/gi))
console.log('el niño corre'.match(/(el|la|los|las)\sniñ(o|a)s?.*/gi))
console.log('los niños corren'.match(/(el|la|los|las)\sniñ(o|a)s?.*/gi))