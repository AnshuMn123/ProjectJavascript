let num = [];

num[0] = 4;
num[9] = 8;

console.log(num); // [ 4, <98 empty items>, 8 ]

console.log(num.length); // 100

for(let key in num){ // print only defined value
    console.log(key);
}


for(let key of num){ // print all defined and undefined also
    console.log(key);
}
