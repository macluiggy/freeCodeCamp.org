
/* PARA EL BACKEND
const {functionName} = require('./fileName.js');
console.log(add(1, 2));
*/

/*PARA EL FRONTEND
import {functionName} from './fileName.js';

console.log(functionName(x, y));
*/


import {mult2Num} from './exportedFunctions.js';
import xd from './defaultFunction.js'; //si es una funcion por defect no hay necesidat de los corchetes, y se le puede llamar como queramos

/*const {mult2Num} = require('./exportedFunctions.js');*/

console.log(mult2Num(2, 2));
console.log(xd(2, 4));