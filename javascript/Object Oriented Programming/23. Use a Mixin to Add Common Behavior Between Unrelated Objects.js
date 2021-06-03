let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = (obj)=>{
  obj.glide = function () {console.log('you can glide now')}
}

glideMixin(boat)
glideMixin(bird)


console.log(bird, boat)