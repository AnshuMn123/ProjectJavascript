
function greet(){
    console.log("hello world");
}

greet();
greet();

greet();
greet();
greet();




function greet1(){
    return "hello";
}

let str = greet1();
console.log(str);


function greet2(usr){
    return `hello ${usr}`;
}

let usr = 'ans'
let str1 = greet2(usr);
console.log(str1);