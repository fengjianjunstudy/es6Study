/**
 * Created by fengjj on 2016/6/16.
 */
/*
    Promise
    优点：不受外界影响，三种状态 pending  resolved(fulfilled)  rejected
    缺点：1、无法取消
          2、不设置回调函数，内部抛出的错误，不会反应到外部
          3、处于pending状态时 无法得知目前的进展
* */
/*
    基本用法：
        Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例
        let p = Promise.all([p1, p2, p3]);
        p的状态由p1、p2、p3决定，分成两种情况。

         （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

         （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
 * */
'use strict';
let p1 = new Promise((resolve,reject) => {
   setTimeout(() => {
       resolve('p1');
   },1000)
});
let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('p2');
    },2000)
});
let p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('p3');
    },3000)
});
let p = Promise.all([p1,p2,p3]);
p.then((args) => {
    for(let val of args) {
        console.log(val);
    }
});
