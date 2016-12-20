/**
 * Created by fengjj on 2016/6/21.
 */
/*
    扩展运算符 ...  将一个数组转为用逗号分隔的参数
    应用：
* */
'use strict';
//合并数组
//es5
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ]

//es6
arr3 = [...arr1,...arr2];

//与解构赋值结合
let list = [0,1,2,3];
//es5
let first = list[0];
let rest = list.slice(1);
//es6
let [f,...r] = list;

//函数返回多个值
function fn() {
    let m = 10,
        n = 5;
    return [m,n];
}
let [m,n] = fn();
console.log(m,n); //10 5


//将字符串转化为真正的数组
console.log(...'hello');

//将类数组对象转化为数组
// nodeLsit  => Array

//Map Set Generator
let m1 = new Map([['name','xiaoming'],['age',18]]);
console.log(...m1); //[ 'name', 'xiaoming' ] [ 'age', 18 ]


let s = new Set(['s1',2,3]);
console.log(...s);  //s1 2 3

function * go() {
    yield 'go1';
    yield 2;
    yield 3;
}
console.log(...go()); //go1 2 3


