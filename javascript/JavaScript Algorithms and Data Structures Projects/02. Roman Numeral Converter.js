function convertToRoman1(num) {
    let rom = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    /*let obj = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    }*/
    var arabicToRoman = {1: "I", 2: "II", 3: "III",  4 : "IV", 5: "V", 6: "VI", 7 : "VII", 8 : "VIII", 9 : "IX", 
10 : "X", 20 : "XX", 30 : "XXX", 40 : "XL", 50 : "L", 60 : "LX", 70 : "LXX", 80 : "LXXX", 90 : "XC", 
100 : "C", 200 : "CC", 300 : "CCC", 400 : "CD", 500 : "D", 600 : "DC", 700 : "DCC", 800 : "DCCC", 900 : "CM", 
1000: "M", 2000: "MM", 3000: "MMM"};
    let arr = num
                .toString()
                .split('')
                .map((x, i, arr) => x+ '0'.repeat(arr.length-1-i))
                console.log(arr)
    let arr2 = arr.map(x => arabicToRoman[x])
    console.log(arr2.join(''))
 return arr2.join('');
}
function convertToRoman(num) {
    var arabicToRoman = {1: "I", 2: "II", 3: "III",  4 : "IV", 5: "V", 6: "VI", 7 : "VII", 8 : "VIII", 9 : "IX", 
10 : "X", 20 : "XX", 30 : "XXX", 40 : "XL", 50 : "L", 60 : "LX", 70 : "LXX", 80 : "LXXX", 90 : "XC", 
100 : "C", 200 : "CC", 300 : "CCC", 400 : "CD", 500 : "D", 600 : "DC", 700 : "DCC", 800 : "DCCC", 900 : "CM", 
1000: "M", 2000: "MM", 3000: "MMM"};
 return num
            .toString()
            .split('')
            .map((x, i, arr) => x+ '0'.repeat(arr.length-1-i))
            .map(x => arabicToRoman[x])
            .join('')
}
console.log(convertToRoman(36)) 