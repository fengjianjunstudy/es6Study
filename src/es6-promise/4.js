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
    promise.then(function(value){
        resolved 状态执行   resolve(val) val可能是某类型的值 也可能是另一个promise 对象
    },function(err){
        rejected状态执行
    })
 * */
'use strict';
let userInfo = {
    id:'123',
    name:'xiaoming',
    age:18
}
function  getServerDate(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let p = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve('I am an  Promise object');
                },1000);
            });
            resolve(p);
        },0);
    });
}
getServerDate().then((promise) => {
    return promise;
},(err) => {
    console.log(err);
}).then((val) => {
    console.log(val);
})