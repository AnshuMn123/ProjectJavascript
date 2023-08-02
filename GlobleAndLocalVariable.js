
function greet(u){
    let num = 1; // local varible
    console.log(usr, num);  // globle variable 
    console.log(`Hello ${u}`);
}

let usr = 'ans'
greet(usr);
// console.log(num); // can't excess local varible



// default value
let add = function(num1, num2, num3 = 1){
    console.log(num1, num2, num3);
    return num1 + num2 + num3;
}

let result = add(2, 3)
console.log(result);
