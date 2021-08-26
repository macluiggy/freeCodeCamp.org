function addTogether(...args) {
  //console.log(args.length > 1)
  if (args.length > 1) {
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return args[0] + args[1]
    } else {
      return undefined
    }
  } else if (typeof args[0] === 'string') {
    return undefined
  } else {
    return (b) => {
      if (typeof args[0] === 'number' && typeof b === 'number') {
        console.log(args[0] + b)
        return args[0] + b
      } else {
        return undefined
      }
    }
  }
}

function addTogether(...args) {
  return args.length > 1 &&
          args.every(arg => typeof arg === 'number')
            ? args.reduce((sum, x) => sum + x)
            : args.length === 1 && typeof args[0] === 'string'
            ? undefined
            : (b) => {
              return typeof args[0] === 'number' && typeof b === 'number'
                      ? args[0] + b
                      : undefined 
            }
}
console.log(addTogether(2, "3"));