
let arr1 = ['one', 'two', 'three'];
let arr2 = ['one', 'two2']
let test = arr1.some(i => arr2.includes(i));

let index = arr1.indexOf('one');
let removed = arr1.splice(index, 1);
console.log(arr1)
console.log(removed)


for (var i = 0; i < 3; i++) {
	var sum = 0;
  }
 
  console.log(i);

let saludammvrg = () => 'hola'
console.log(saludammvrg())

let arr = ['Netflix', 'YouTube', 'Vimeo', 'Vine'];

arr = arr.filter((tab, i, arr) => tab !== arr[2])
console.log(arr)