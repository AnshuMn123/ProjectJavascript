let num = [1, 2, 4, 5, 6, 7];

num.forEach(n => console.log(n, "1"));


num.forEach((n) => {
    console.log(n)}
    );


num.forEach((n, i, num) => {
    console.log(n*2, i, num)}
    );