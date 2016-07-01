/**
 * Created by fengjj on 2016/7/1.
 */
/*
    函数参数解构
* */
'use strict';
function fn([a=6,b=6]) {
    console.log(a,b);
}
fn([1]);

function fn1({name='xiaoming',age=18}) {
    console.log(name,age);
}
fn1({name:'xiaohua'});
