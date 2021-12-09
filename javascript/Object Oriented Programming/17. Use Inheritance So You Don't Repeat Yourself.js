function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  constructor: Animal,
};

function Animal(name) {
  this.name = name;
}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

Animal.prototype.eat();
let perro = new Animal("loki") || Object.create(Animal.prototype);
perro.eat();
console.log(perro.name);
