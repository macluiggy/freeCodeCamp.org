function dropElements1(arr, func) {
  let arr2
  for (var i = 0; i < arr.length; i++) {
    let el = arr[i]
    if (func(el)) {
      arr2 = arr.slice(i, arr.length)
      break
    }
  }
  console.log(arr2)
  return arr2 || []
}
function dropElements(arr, func) {
  let arr2
  for (var i = 0; i < arr.length; i++) {
    let el = arr[i]
    if (func(el)) {
      arr2 = arr.slice(i, arr.length)
      break
    }
  }
  return arr2 || []
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));