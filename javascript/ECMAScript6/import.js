
/* PARA EL BACKEND
const {add} = require('./add.js');
console.log(add(1, 2));
*/

/*PARA EL FRONTEND
import {functionName} from './functionFileName.js';

console.log(functionName(x, y));
*/


import {mult2Num} from './exportedFunctions.js';
import xd from './defaultFunction.js';

/*const {mult2Num} = require('./exportedFunctions.js');*/

console.log(mult2Num(2, 2));
console.log(xd(2, 4));