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
funModule.isCuteMixin(ross)
funModule.singMixin(ross)
console.log(ross.isCute())
ross.sing()
