const lunAVie = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
let lun_a_dom = [...lunAVie, 'sabado', 'domingo']

console.log('5 dias de trabajo son: ' + lunAVie);
console.log('los 7 dias dela semana son: ' + lun_a_dom);

var oneToTen = [1,2,3,4,5,6,7,8,9,10];
let elevenToTwelve = [11,12,13,14,15,16,17,18,19,20];
const oneToTwelve = [...oneToTen, ...elevenToTwelve];
console.log (oneToTwelve);

let obj = {
	one: 'uno',
	two: 'dos',
	three: 'tres',
	four: 'cuatro',
	five: 'cinco',
}

const {one: uno, three, ...rest} = obj
console.log(uno, three, rest)

 const interval = setInterval(() => console.log('tick'), 1000)