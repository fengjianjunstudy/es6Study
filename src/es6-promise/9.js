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
        Promise.resolve 将现有的对象转换为Promise对象
        1、参数为Promise对象  不做任何处理 直接返回该Promise对象
        2、参数是一个thenable对象 （具有then方法的对象），将这个对象转为Promise对象，然后就立即执行thenable对象的then方法。
        3、参数不是具有then方法的对象，或根本就不是对象
            如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为Resolved。
            let  p = Promise.resolve('hello word');
            内部操作 ：
            p = new Promise((resolve,reject) => {
                resolve('hello word');
            });

            p.then((val) => {
                console.log(val);
            });
        4、不带任何参数
            Promise.resolve方法允许调用时不带参数，直接返回一个Resolved状态的Promise对象。
            所以，如果希望得到一个Promise对象，比较方便的方法就是直接调用Promise.resolve方法。



        Promise.reject
            Promise.reject(reason)方法也会返回一个新的Promise实例，该实例的状态为rejected
             var p = Promise.reject('出错了');
             // 等同于
             var p = new Promise((resolve, reject) => reject('出错了'))

             p.then(null, function (s){
             console.log(s)
             });
             // 出错了
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
