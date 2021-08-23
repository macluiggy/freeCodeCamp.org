function sumAll(arr) {
  arr.sort((a, b) => a - b)
  let arr2 = []
  let initial = arr[0];
  let final = arr[arr.length-1]
  for (var i = initial; i <= final; i++) {
    arr2.push(i)
  }
  console.log(arr2)
  return arr2.reduce((sum, current) => sum + current, 0)
}

console.log(sumAll([5, 10]));

