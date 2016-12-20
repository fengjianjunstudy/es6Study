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
        指定发生错误时的回调函数
        Promise.prototype.catch    then 方法中的resolveFn 和rejectFn 中的错误都会捕获  返回的依然是一个Promise实例，catch方法之后的then方法抛出的错误，前面的catch方法不会捕获
        Promise.prototype.then(null,rejectFn)   只捕获当状态变为rejected状态时的错误


        Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止

 * */
'use strict';
let userInfo = {
    id:'123',
    name:'xiaoming',
    age:18
}
/*
function  getServerDate(){
    return new Promise((resolve,reject) => {
        throw  new Error('in promise');
        setTimeout(() => {
            //throw  new Error('in promise'); 这里的错误不会被捕获 下次事件循环的时候抛出的错误，会抛出到Promise函数体外
            resolve('success');
        },0);
    });
}
getServerDate().then((val) => {
    console.log(val);
},(err) => {
    console.log('===reject===');
    console.log(err);
}).catch((err) => {
    console.log('===catch===');
    console.log(err);
})*/
function  getServerDate(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            //throw  new Error('in promise'); 这里的错误不会被捕获
            //resolve('success');
            reject('fail');
        },0);
    });
}
getServerDate().then((val) => {
    console.log(val);
    //throw  new Error('in resolve');   //这错误不会被then 方法中的rejectFn捕获，catch会捕获
},(err) => {
    console.log('===reject===');
    console.log(err);
    throw  new Error('in reject');   //这错误 catch会捕获
}).catch((err) => {
    console.log('===catch===');
    console.log(err);
})
