
let arr1 = ['one', 'two', 'three'];
let arr2 = ['one', 'two2']
let test = arr1.some(i => arr2.includes(i));

let index = arr1.indexOf('one');
let removed = arr1.splice(index, 1);
console.log(arr1)
console.log(removed)
