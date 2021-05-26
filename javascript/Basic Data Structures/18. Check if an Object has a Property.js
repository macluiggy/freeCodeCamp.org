let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// 'prop' in object
// object.hasOwnProperty('prop')
function isEveryoneHere(userObj) {
  // Only change code below this line
  return ('Alan' in userObj
           && 'Jeff' in userObj
           && userObj.hasOwnProperty('Sarah')
           && userObj.hasOwnProperty('Ryan')
           ? true : false)
  // Only change code above this line
}

console.log(isEveryoneHere(users));