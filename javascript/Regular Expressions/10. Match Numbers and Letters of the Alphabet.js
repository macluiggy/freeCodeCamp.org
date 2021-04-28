let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result.length);

//fucnion que debuelve la cantidad de vocales y numeros
let string = 'soy un string 12 3 4 1';
let regex = /[aeiou0-9]/g

let cantidadVocalesYNumeros = () => {
	let result = string.match(regex);
	return result.length;
}
console.log(cantidadVocalesYNumeros())

//fucnion que debuelve la cantidad de vocales y numeros y la palabra resultante
let cantidadVocalesYNumerosConLaPalabra = (string) => {
	let result = string.match(regex);
	let palabra = '';
	for(let i = 0, length1 = result.length; i < length1; i++){
		palabra += result[i];
	}
	return `La cantidad de caracteres es ${result.length} y la palabra que se retorna es ${palabra} `;
}
console.log(cantidadVocalesYNumerosConLaPalabra('hola mi llabe 123'));

function encuentraLosNumeros (string) {
	return string.match(/[0-9]/g);
}
console.log(encuentraLosNumeros('h0l4 m1 4m160'))