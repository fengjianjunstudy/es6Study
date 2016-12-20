/**
 * Created by fengjj on 2016/6/21.
 */
/*
    尾调用：某个函数的最后一步调用另一个函数
    尾调用优化：不保留外层函数的调用侦，只保留内部函数的调用侦
* */
'use strict';
function g(m,n){
    console.log(m+n);
}
function f() {
    let m = 10;
    let n = 6;
    return g(m,n);
}
f();



