/**
 * Created by fengjj on 2016/6/21.
 */
/*
    Array.of   将一组值转化为数组   弥补Array的不足
* */
'use strict';
let arr = new Array(3);
console.log('===== new Array(3)=====',arr);
let arr1 = Array.of(3);
console.log('==== Array.of(3) ====',arr1);

//模拟Array.of

function ArrayOf() {
    return Array.prototype.slice.call(arguments);
}