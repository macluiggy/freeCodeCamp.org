function destroyer(arr) {
    var argumentsToRemove = Array.from(arguments).slice(1)
    console.log(argumentsToRemove)
    return arr.filter(el => !argumentsToRemove.includes(el))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));