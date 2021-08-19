function Dog() {
	this.name = 'name';
	this.color= 'red';
	this.numLegs = 0000000;
}

let thor = new Dog('thor')

for(let prop in thor) console.log(thor[prop])

	console.log(thor.color)

function Cat (name) {
	this.name = name;
}

const mishu = new Cat('botitas');
console.log(mishu.name)