let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);

console.log('-hola mi compa-- como esta--- y bien--'.match(/-.*?--/))

console.log('%esta es una oracion pequeña% %pero sumada esta es mas grande% &hola&'.match(/%.*?% |&.*?&/g))