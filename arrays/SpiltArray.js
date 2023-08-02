let words = "my name is ans sing";
words.split(' ');
console.log(words);
console.log(words.split(' '));

let words1 = "my name is ansh singh".split(' ');
console.log(words1);


let [a, b, c, d] = words1;
console.log(a, b, c, d);


let [e, f,,  ...g] = words1;
console.log(e, f, g);