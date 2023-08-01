// 1. primitive data types

let data = 8
let user = "as"

let n1 = 25424e131312
console.log(n1)  // print infinity

console.log(typeof data)
console.log(typeof user) 

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)


let number = 13112425367651425263411212121
console.log(number)

let number1 = 13112425367651425263411212121n
console.log(number1)

// console.log(number1 + 2) //can't add int into BigInt 
console.log(number1 + 2n) // need to typecast in bigInt


let x = "Volvo" + 16 + 4;
console.log(x)
let x1 = 16 + 4 + "Volvo";
console.log(x1)



