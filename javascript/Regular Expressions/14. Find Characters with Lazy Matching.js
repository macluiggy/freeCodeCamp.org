let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);

console.log('-hola mi compa-- como esta--- y bien--'.match(/-.*?--/))