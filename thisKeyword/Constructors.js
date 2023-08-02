
function usr(name, tech){
    this.name = name;
    this.tech = tech;

    // return this; // by default it is returning this
    // return 7; if we want to return something else also, then it will just ignore that value

    this.work = function(){
                    console.log("hello");
                }
} 

let usr1 = new usr('a', 'ds');
let usr2 = new usr('b', 'ec');

console.log(usr1, usr2);
// console.log(`usr1 is ${usr1}`);
// console.log(`usr2 is ${usr2}`);


usr1.name = 'c';
usr2.tech = 'd';
console.log(usr1, usr2);
