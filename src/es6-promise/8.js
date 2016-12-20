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
        Promise.race方法用于将多个Promise实例，包装成一个新的Promise实例
        let p = Promise.race([p1, p2, p3]);
        只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的回调函数。
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
let p = Promise.race([p1,p2,p3]);
p.then((val) => {
    console.log(val);
});
