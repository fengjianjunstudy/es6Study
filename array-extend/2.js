/**
 * Created by fengjj on 2016/6/21.
 */
/*
    Array.from   将对象(类数组或者可遍历(iterable)对象)转换成真正的数组，可遍历对象包括（ES6中的Set 和 Map）
* */
'use strict';
//类数组
let array_like = {
    '0':'xiaoming',
    '1':'xiaohua',
    'length':2
}
let acture_arr = Array.from(array_like);
console.log('==== array like====', acture_arr);


function fn() {
    let args = Array.from(arguments);
    console.log('===== arguments =====');
    console.log(args);
    console.log(args.slice(1));
    console.log('===== arguments =====');
}
fn(1,2,3);






