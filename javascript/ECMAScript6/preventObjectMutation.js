function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (elValorPorDefecto) {
        console.log(elValorPorDefecto);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI)

function freeAnotherObj(argument) {
    // body... 
    const MATH_CONSTANTS = {
        e: 2.18,
    }
    Object.freeze(MATH_CONSTANTS); //no deja que los valores del objeto se puedan manipular
    MATH_CONSTANTS.e = 2;
    return MATH_CONSTANTS.e;
}
const e = freeAnotherObj();
console.log(e)