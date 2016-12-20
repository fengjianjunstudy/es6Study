/**
 * Created by fengjj on 2016/6/21.
 */
/*
    扩展运算符 ...  将一个数组转为用逗号分隔的参数
* */
'use strict';
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ]

//替代数组的apply方法
function f(x,y,z) {
    console.log(x,y,z);
}
let args = [1,2,3];
f.apply(null,args); //1 2 3

//等同于下面
f(...args); //1 2 3

//数组求最大值
let  arr = [11,23,16,8,20,98,518];
//es5
let max_es5 = Math.max.apply(null,arr);
let max_es6 = Math.max(...arr);
console.log(max_es5,max_es6);  //518

//将一个数组push在另外一个数组的后面
let array1 = [1,2,3];
let array2 = [4,5,6];
//es5
//Array.prototype.push.apply(array1,array2);
//console.log(array1);  //[ 1, 2, 3, 4, 5, 6 ]

//es6
array1.push(...array2);
console.log(array1); //[ 1, 2, 3, 4, 5, 6 ]

