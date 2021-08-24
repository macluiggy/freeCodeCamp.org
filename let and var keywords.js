
let arr1 = ['one', 'two', 'three'];
let arr2 = ['one', 'two2']
let test = arr1.some(i => arr2.includes(i));

let index = arr1.indexOf('one');
let removed = arr1.splice(index, 1);
//console.log(arr1)
//console.log(removed)


for (var i = 0; i < 3; i++) {
	var sum = 0;
  }
 
  //console.log(i);

  let arr22 = [1,2];
  let arr33 = arr22.slice();

  //console.log(arr33)

  //console.log('hello')
  let arrxx = [];
  let obj = { last: "Capulet", hola: 'hola'};
  let obj2 = { hola: 'hola', last: "Capulet"};
  let obj3 = { last: "Capulet", hola: 'hola'};
  let l = 0;
  for (let val in obj) {
    for (let val2 in obj3) {
        if (val === val2 && obj[val] === obj3[val2]) {
            l++
        }
    }
  }

  console.log(false && false)