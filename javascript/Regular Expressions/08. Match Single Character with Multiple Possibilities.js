let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);
console.log(result.length);

let names = ['Angel', 'Fernando', 'Angulo', 'Coveña', 'aaaaaaaaaa'];
let namesAn = []
for (let i = 0, length1 = names.length; i < length1; i++) {
    const name = names[i];
    namesAn.push(name.match(/[an]/gi));
}
console.log(namesAn)

//Verifica si el la primera palabra de cada nombre empieza con X letra
let nombresQueEmpiezanConXLetra = [];
for (let i = 0, length1 = names.length; i < length1; i++) {
    const name = names[i];
    if (/a/i.test(name[0])) {
        // statement
        nombresQueEmpiezanConXLetra.push(name);

    }
}
console.log(nombresQueEmpiezanConXLetra);

