let a = 'hello';
console.log(a);

function catTalk() {
    "use strict";
    let x = 3.14;
  
  }
  catTalk();

  let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
