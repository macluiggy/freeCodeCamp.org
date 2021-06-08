/*let c = 0;
function persistence(num) {
   //code me
   //console.log(num)
   if(num < 10) return c
   let arr = num.toString().split('').map(d => parseInt(d));
   console.log(arr)
   c++
   return persistence(arr.reduce((a, b) => a*b))
}
*/

function persistence(num) {
   //code me
   let arr = num.toString().split('').map(d => parseInt(d));
   let c = 0;
   while(num > 9) {
      console.log(num)
      c++
      num = arr.reduce((a, b) => a*b);
      arr = num.toString().split('').map(d => parseInt(d));
   }
   return c
}

console.log(persistence(25))