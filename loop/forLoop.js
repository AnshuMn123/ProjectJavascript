
for(let i = 1; i <= 5; i++){
    console.log("Hi " + i)
}


let i = 1
for(; i <= 5;){
    console.log("Hi " + i);
    i++;
}


for(let i = 1; i <= 5; i++){
    console.log("Hi");
    for(let j = 1; j <= 5; j++){
        console.log("Hello " + i + "  " + j);
    }
}