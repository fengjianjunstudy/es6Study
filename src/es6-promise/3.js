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
        resolved 状态执行
    },function(err){
        rejected状态执行
    })


    用Promise实现ajax的例子
 * */
'use strict';
function getJson(url) {
    let promise = new Promise((resolve,reject) => {
        let client = new XMLHttpRequest();
        client.open('GET',url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept','application/json');
        client.send();
        function handler() {
            if(this.readyState === 4 && this.status === 200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }
    })
    return promise;
}
getJson('/post.json')
    .then((json) => {
        console.log(json);
    },(err) => {
        console.log(err);
    })