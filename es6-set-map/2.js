"use strict";
//Set 实例属性
let s1 = new Set([1]);
console.log(s1.constructor,s1.size);

//Set 实例方法

s1.add(2);
let flag = s1.has(1);
console.log(s1,flag);
s1.delete(1);
flag = s1.has(1);
console.log(s1,flag);


//Array.from 将Set结构转为数组   Set和Array.from结合数组去重
let arr = Array.from(s1);
console.log(arr);

let arr1 = [1, 1, 2, 3];
let s2 = new Set(arr1);
let arr2 = Array.from(s2);
console.log(arr2);