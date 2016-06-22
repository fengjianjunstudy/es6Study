/**
 * Created by fengjj on 2016/6/21.
 */
/*
    找到第一个符合条件的数组成员。
    Array.prototype.find((value,index,arr) => {
        所有的数组成员依次执行该回调函数，直到找到第一个返回值为true的成员，如果没有符合条件的返回undefined
    })
    查找第一个符合条件的数组成员的位置
    Array.prototype.findIndex((value,index,arr) => {
    })
    查找第一个与参数相同的数组成员的位置
    Array.prototype.indexOf(value)
* */
'use strict';
let arr = [1,2,3,4,5,6];
let v1 = arr.find((value,index,arr) => {
    return value>5;
})
console.log(v1);
let w1 =arr.findIndex((value,index,arr) => {
    return value>5;
})
console.log(w1);

let w2 = arr.indexOf(1);
console.log(w2);