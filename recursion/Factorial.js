
function fact(n){
    if(n == 0){
        return 1;
    }
    return n* fact(n - 1);
}


console.log(fact(5));
console.log(fact(15));
console.log(fact(170)); // maximum limit
console.log(fact(171)); // give infinity