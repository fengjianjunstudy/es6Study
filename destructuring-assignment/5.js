/**
 * Created by fengjj on 2016/7/1.
 */
/*
    解构用途
* */
'use strict';
//变量交换
let a = 6;
let b = 8;
[a,b] = [b,a];
console.log(a,b);

//函数返回多个值
function fn() {
    return [1,2,3];
}
let [x,y,z] = fn();
console.log(x,y,z);
