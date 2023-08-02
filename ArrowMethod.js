
let greet = function (){
    console.log("Hello world");
    return 1;
}
greet();


// or

let greet1 = () => {
    console.log("Hello world  1");
    return 1;
}
greet1();


function greet2(u = 'ans'){
    console.log(`Hello ${u}  2`);
}

greet2('singh');

let greet3 = (u) => {
    console.log(`Hello ${u} 3`);
}

greet3('singh ');



let add1 = (num1, num2) => {
    return num1 + num2;
}

console.log(add1(2, 3));

// if one statement

let add2 = (num1, num2) => num1 + num2;

console.log(add2(4, 3));