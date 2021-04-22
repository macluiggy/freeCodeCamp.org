// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear += newGear;
  },
  gear: 4
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

const addNum = {
	num: 1,
	addNum(newNum) {
		return this.num += newNum;
	}
}
var num = addNum.num;
addNum.addNum(8);
console.log(addNum.num)
addNum

const edadDeUnaPersona = {
	edadActual: 8,
	actualizarEdad(años) {
		return this.edadActual += años;
	}
}
console.log(`Jack tiene ${edadDeUnaPersona.edadActual} años`);
//han pasado 5 sños
edadDeUnaPersona.actualizarEdad(5); //actualiza la edad
console.log(`Han pasado 5 años por lo que Jack ahora tiene ${edadDeUnaPersona.edadActual} años`)