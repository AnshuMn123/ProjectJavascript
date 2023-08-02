
let num = 1;
function show(){
    console.log('Hi' , num++);
    show();
}

show();