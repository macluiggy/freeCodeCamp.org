var Person1 = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let [first, last] = firstAndLast.split(' ');
  this.getFullName = function() {
    return `${first} ${last}`;
  };
  this.getFirstName = () => first;
  this.getLastName = () => last;
  this.setFirstName = (f) => first = f;
  this.setLastName = l => last = l;
  this.setFullName = (fn) => {
    let [f, l] = fn.split(' ');
    first = f;
    last = l;
  };
  return firstAndLast;
};

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let [first, last] = firstAndLast.split(' ');
  this.getFullName = () => `${first} ${last}`;
  this.getFirstName = () => first;
  this.getLastName = () => last;
  this.setFirstName = (f) => first = f;
  this.setLastName = l => last = l;
  this.setFullName = (fn) => {
    let [f, l] = fn.split(' ');
    first = f;
    last = l;
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName())
console.log(bob.getFirstName())
bob.setFirstName('rob')
console.log(bob.getFirstName())
console.log(bob.getLastName())
bob.setLastName('boss')
console.log(bob.getLastName())
bob.setFullName('bob esponja')
console.log(bob.getFullName())

let a = 
`
Bob Ross
Bob
rob
Ross
boss
Bob Ross
`
let b = 
`
Bob Ross
Bob
rob
Ross
boss
bob esponja
`