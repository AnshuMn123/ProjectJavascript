
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

num.filter((n) => n%2 == 0)
.forEach((n) => {
    console.log(n, 'filter')}
    );

num.filter((n) => n%2 == 0)
    .map((n) => n*2)
    .forEach((n) => {
        console.log(n, 'map')}
        );
    
let result = num.filter((n) => n%2 == 0)
    .map((n) => n*2)
    .reduce((a, b) => a + b);

console.log(result);