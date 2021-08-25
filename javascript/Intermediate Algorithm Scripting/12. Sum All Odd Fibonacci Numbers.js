function sumFibs1(num) {
    var i;
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= num; i++) {
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    let arr2 = fib
                .filter(odd => !(odd%2 === 0))
                .filter(lessThanNum => lessThanNum <= num)
                console.log(arr2)
    let sum = 0;
    for (var i = 0; i < arr2.length; i++) {
      let odd = arr2[i];
      sum += odd
    }
    return sum
}
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
    return fib
                .filter(odd => !(odd%2 === 0))
                .filter(lessThanNum => lessThanNum <= num)
                .reduce((s, n) => s + n)
}
console.log(sumFibs(75024));
