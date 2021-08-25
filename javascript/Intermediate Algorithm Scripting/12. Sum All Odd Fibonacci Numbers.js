function sumFibs(num) {
    var i;
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= num; i++) {
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    let arr2 = fib.filter(odd => odd%2 === 1)
    let sum = 0;
    for (var i = 0; i < arr2.length; i++) {
      let odd = arr2[i];
      if (sum >= num) {
        break
      } else {
        sum += odd
      }
    }
    return sum
}

console.log(sumFibs(75024));
