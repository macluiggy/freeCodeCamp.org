function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };//crea un metodo para el objeto Bird

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype) || new Bird();//hereda la propiedades del objeto Bird
Penguin.prototype.constructor = Penguin;//establece el constructor propio para Penguin

// Only change code below this line

Penguin.prototype.fly = () => 'Alas, this is a flightless bird.'//sobreescribe el metodo de Bird para que diga algo diferente, este metodo solo se sobreescribe para el las nuevas isntancias de Penguin

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());// este mostrara el mensaje sobreescrito

let bird = new Bird()
console.log(bird.fly())//minstras que este mostrara el mensaje original