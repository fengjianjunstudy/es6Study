"use strict";
//Set实例遍历
let s1 = new Set(['red','green','blue']);
for(let color of s1) {
    console.log(color);
}


for(let key of s1.keys()) { //keys键名的遍历
    console.log('key',key);
}

for(let val of s1.values()) { //values  键值的遍历
    console.log('val',val);
}

for(let entry of s1.entries()) { //entry  键值对的遍历
    console.log('entry',entry);
}

s1.forEach(x => {   //回调函数遍历每个成员
    console.log('forEach',x);
})


console.log(Set.prototype[Symbol.iterator] ===  Set.prototype.values);
console.log([...s1]);  // ...扩展运算符   内部使用for of


//... 和 Set 结构结合  数组去重

let array = [1,1,2,3];
console.log([...new Set(array)]);


//数组并集

let a1 = [1,2,3];
let a2 = [2,3,6];
let a3 = new Set([...a1,...a2]);

console.log(Array.from(a3));


//数组的交集

let a4 = new Set(a2);
let a5 = a1.filter(x => {
    return a4.has(x);
});

console.log(a5);


//数组的差集
let a6 = new Set(a2);
let a7 = a1.filter(x => {
    return !a6.has(x);
});

console.log([...a7]);



//map 方法在数组上存在  如果想要对Set结构映射   需要将Set结构转化为数组   转换方法：Array.from  [...s]
let a8 = [...a6].map(x => {
    return x*2;
});
console.log([...a8]);
