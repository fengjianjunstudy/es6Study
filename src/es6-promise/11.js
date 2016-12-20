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
        应用 Promise 是立即执行的，利用generator可以控制Promise什么时候开始执行
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
let g = function* () {
    let foo = yield getServerDate();
    console.log(foo);
}
function run(g) {
    let it = g();
    function go(result) {
        if(result.done) {
            return result.value;
        }
        return result.value.then((val) => {
            console.log(val);
        });
    }
    go(it.next());
}
run(g);
