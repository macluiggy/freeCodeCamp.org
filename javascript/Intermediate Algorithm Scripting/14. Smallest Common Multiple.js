function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b)
  let arr2 = []
  for (var i = min; i <= max; i++) {
    arr2.push(i)
  }
  return isEveryDivisible(arr2, 1)
}

function isEveryDivisible(arr, x) {
    return arr.every(n => x/n === parseInt(x/n))
            ? x 
            : isEveryDivisible(arr, x+1)
  }
/*Array.prototype.smallestCommonMultiple = (x) => 
            this.every(n => x/n === parseInt(x/n))
            ? x 
            : this.smallestCommonMultiple(x+1)*/
console.log(smallestCommons([2, 10]));

//console.log(Array(4).fill('kk'))