let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
console.log(result)
console.log('username perro3 h0l4'.match(/[a-z]+/gi))
console.log('perro3 username  h0l4'.match(/^[a-z]+/gi))

let username2 = "JackOfAllTrades3";
let userCheck2 = /^[a-z]([0-9]{2,}|[a-z]+\d*$)/i; // Change this line
let result2 = userCheck2.test(username2);
console.log(result2)

/*
1. ^ - inicia con lo que sigue
2. [a-z] - lo que sigue son las letras de la 'a' a la 'z', osea solo puede empezar con ello
3. [a-z]+ - si se cumple los dos pasos primeros, entonces los siguientes caracteres tienen que ser
letras de de la 'a' a la 'z' tambien
4. \d*$ - este quiere decir que el string debe terminar con uno o mas digitos
4.1 \d - este representa todos los digitos
4.2 * esto que pueden ser cero o mas
4.3 $ - y este que todo lo demas tiene que estar al final del string
5. | - de otro modo
6. ^[a-z] - lo mismo que el punto 1. y 2.
7. \d\d+ - los siguientes caracteres son 2 o mas digitos
8. $ - tienen que terminar el numeros
*/


var reg1=/^...$/g     //match any string that length=3
console.log("abc".match(reg1))   //output: true
console.log("efg".match(reg1))   //output: true
console.log("ab".match(reg1))    //output: false
console.log("abcd".match(reg1)) 