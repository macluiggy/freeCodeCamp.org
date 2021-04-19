const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {name, age, gender};
  // Only change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male"))

const encuesta = (años, profesion, experiencia) => {
	return {profesion, años, experiencia};
}
console.log(encuesta('26', 'superman', '7'));

var yesner = encuesta(40, 'mecanico naval', 8);
console.log(`Hola, me llamos Yesner y tengo ${yesner.años} años, soy ${yesner.profesion} y tengo ${yesner.experiencia} años de experiencia`);