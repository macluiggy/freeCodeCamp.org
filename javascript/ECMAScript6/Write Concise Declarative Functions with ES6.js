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