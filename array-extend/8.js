/**
 * Created by fengjj on 2016/6/21.
 */
/*
    遍历数组，返回一个遍历器对象，即可以使用 for of遍历
    Array.prototype.keys()   //键名的遍历
    Array.prototype.values()   //键值的遍历   babel-node 中已经实现
    Array.prototype.entries() // 键值对的遍历
* */
'use strict';
let arr = [1,2,3,4,5,6];
let keys = arr.keys();
for(let k of keys) {
    console.log('==== keys =====',k);
}
let vals = arr.values();
for(let v of vals) {
    console.log('===== values =====',v);
}
//let entries = arr.entries();  =》{}
let entries = new Set(arr).entries();
//均报错
/*for(let o of entries) {
    let [k,v] = o;
    console.log('======= key+value',k+'+'+v)
}
for(let [k,v]  of entries) {
    console.log('======= key+value',k+'+'+v)
}*/




