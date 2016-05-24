"use strict";
/*
    WeakSet
    1.WeakSet的成员只能是对象，而不能是其他类型的值
    2.WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用
*/

let ws = new WeakSet();
let arr = ['a','b'];
ws.add(arr);
console.log(ws.has(arr));

// WeakSet 的用途   存储DOM节点