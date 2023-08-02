let usr = {
    name: 'aaa',
    tech: 'JS',
    laptop: {
        cpu: '17',
        ram: '4', 
        brand: 'lenovo'
    }
}


console.log(usr);

console.log(usr.laptop.brand);

console.log(usr.laptop.brand.length);

// console.log(usr.laptop.brand1.length);  // it will show the error in terminal
console.log(usr.laptop.brand1?.length); // it will not show error return ==> undefined
// can't excess length of undefined variables

console.log(usr);

delete usr.laptop
console.log(usr);



