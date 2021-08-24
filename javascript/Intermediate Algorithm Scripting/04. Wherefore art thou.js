function whatIsInANameTest(collection, source) {
    var arr = [];
    // Only change code below this line
    /*for (let key in source) {
      //console.log(key)
      for (var i = 0; i < collection.length; i++) {
        let elObj = collection[i];

      }
    }*/
    let arr2 = collection.filter(obji => areEqual(obji, source))

    function areEqual(obj1, obj2) {
        // body...
        let l = 0;
        for (let val1 in obj1) {
            for (let val2 in obj2) {
                if (val1 === val2 && obj1[val1] === obj2[val2]) {
                    l++
                }
            }
        }
        return l === Object.keys(obj2).length
    }
    // Only change code above this line
    console.log(arr2)
    return arr2;
}

function whatIsInAName(collection, source) {
    function areEqual(obj1, obj2) {
        // body...
        let l = 0;
        for (let val1 in obj1) {
            for (let val2 in obj2) {
                if (val1 === val2 && obj1[val1] === obj2[val2]) {
                    l++
                }
            }
        }
        return l === Object.keys(obj2).length
    }
    return collection.filter(obji => areEqual(obji, source))
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));