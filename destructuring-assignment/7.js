/**
 * Created by fengjj on 2016/7/1.
 */
/*
    解构用途
* */
'use strict';
//遍历Map结构
let map = new Map();
map.set('first','li');
map.set('second','san');
for(let [k,v] of map){
    console.log(k,v);
}

//输入模块的指定方法
//假如一个模块有多个方法，但只需要其中的一下，exports = moduleObject
//moduleObject= {
//    getName() {
//        console.log('lucy');
//    },
//    getAge() {
//        console.log(18);
//    }
//}

//可以想如下方法
//const {getName} = require(modulePath);




