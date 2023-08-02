let map = new Map();

map.set("a", "f");
map.set("b", "g");
map.set("c", "h");
map.set("d", "i");
map.set("e", "j");


console.log(map.keys());
console.log(map.values());
console.log(map.has('a')); // give T/F
console.log(map.get('a')); // value corresponding to key


for(let [k, V] of map){
    console.log(k, " : ", V);
}

map.set("e", "k");

console.log('replaced e : ', map.get('e'));