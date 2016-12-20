"use strict";
let s = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => {
    s.add(x);
});
for(let i of s) {
    console.log(i);
}
let set = new Set([2, 3, 5, 4, '5', 2, 2]);  //数组去重   内部判断用 ===
console.log(set.size);
console.log([...set]);
let s1 = new Set();
let a = NaN,b = NaN;
s1.add(a).add(b);   //set 内部NaN 和NaN是相等的  即此处传入的两个NaN认为是相等的
console.log(s1.add(0));

let s2 = new Set();
s2.add({}).add({});  // 两个对象总是不相等的
console.log(s2);