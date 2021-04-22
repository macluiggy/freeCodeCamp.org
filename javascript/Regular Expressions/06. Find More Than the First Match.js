let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);

console.log('uNo dos uno dos UnO dOs 1 1 1, 2'.match(/uno | dos |1 |2/gi))