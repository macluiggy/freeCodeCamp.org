let haStr = "HazzzzahHazzzzzzzahhazzzzzah";
let haRegex = /haz{4,}ah/ig; // Change this line
let result = haRegex.test(haStr);
console.log(result)
console.log(haStr.match(haRegex))

///si puede decir mas de 10 as puede aguantar la respiracion para pelear con bob esponja
let aguantaLaRespiracion = string => /^.*a{10,}/.test(string)

console.log(aguantaLaRespiracion('haaaaaaaaaaaaaaaaaaaeeaaa'))
console.log(aguantaLaRespiracion('h' + 'a'.repeat(100)))
console.log('h' + 'a'.repeat(100))