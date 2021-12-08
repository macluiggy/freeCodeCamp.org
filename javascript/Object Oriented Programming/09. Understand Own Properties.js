function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let prop in canary) {
	if (canary.hasOwnProperty(prop)) ownProps.push(prop);
	//ownProps.push(prop);

}
console.log(ownProps);

Bird.prototype = {
	constructor: Bird,
	color: 'green'
}

let loro = new Bird('suri')
let ownProps2 = []
let noOwnProps2 = []
for (let prop in loro) {
	if (loro.hasOwnProperty(prop)) ownProps2.push(prop);
	else noOwnProps2.push(prop)
	//ownProps.push(prop);

}
console.log(ownProps2);
console.log(noOwnProps2);