/**
 * Created by fengjj on 2016/6/21.
 */
/*
    使用给定的值填充数组，已有的成员会被抹去
    Array.prototype.fill(value,start,end) end 不包含该位置   会修改原来的数组

* */
'use strict';
let newArr = new Array(3).fill(6);
console.log(newArr);
let arr = [1,2,3,4,5,6];
arr.fill(8,3,4);
console.log(arr);


