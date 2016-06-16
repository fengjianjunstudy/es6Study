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
    new Promise(function(resolve,reject){
        if(success) {
            resolve(value)
        }else{
            reject(value)
        }
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
            resolve(userInfo);
        },0);
    });
}
getServerDate().then((data) => {
    console.log(data);
})