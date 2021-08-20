const squareList = arr => arr
                            .filter(n => n >= 0)
                            .filter(n => parseInt(n) === n)
                            .map(n => n**2)

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

console.log(4.8 % 2)