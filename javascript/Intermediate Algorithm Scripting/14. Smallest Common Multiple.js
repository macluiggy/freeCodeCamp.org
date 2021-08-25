function smallestCommons(arr) {
  arr.sort((a, b) => a - b)
  let arr2 = []
  for (var i = 1; i <= arr[arr.length-1]; i++) {
    arr2.push(i)
  }
  console.log(arr2)
  let boolean = true;
  let x = 1;
  while (boolean) {
    console.log(arr2.every(n => x/n === parseInt(x/n)))
    if (arr.every(n => x/n === parseInt(x/n))) {
      boolean = false
    } else {
      x+=1
    }
  }
  return x;
}


console.log(smallestCommons([1,6]));