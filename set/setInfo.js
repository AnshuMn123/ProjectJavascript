
let nums = new Set("bookkeeper");
console.log(nums);


let nums1 = new Set();
nums1.add(3);
nums1.add(4);
nums1.add(4);
nums1.add("as");
nums1.add("as");
nums1.add('a');


console.log(nums1);


nums1.forEach(n => console.log(n));

console.log(nums1.has(3));
console.log(nums1.has(34));

