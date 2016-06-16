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
        自己部署有用的附加方法 done finally
 * */
'use strict';
Promise.prototype.done = function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected)
        .catch(function (reason) {
            // 抛出一个全局错误
            setTimeout(() => { throw reason }, 0);
        });
};
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value  => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};