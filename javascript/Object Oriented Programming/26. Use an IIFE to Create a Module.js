let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})()

function Person() {
  this.eat = 'eating'
}

Person.prototype = {
  constructor: Person,
}



let ross = new Person();
console.log(ross)//al inicio solo tiene las propiedades que se establecieron en la funcion constructor
funModule.isCuteMixin(ross)
console.log(ross)
funModule.singMixin(ross)
console.log(ross)
console.log(ross.isCute())
ross.sing()
//ahora tiene las propiedades anteriores mas las que se añaden en el modulo
