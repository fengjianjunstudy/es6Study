/**
 * Created by fengjj on 2016/6/21.
 */
/*
    rest参数  她之后不能再有参数
* */
'use strict';
function add(...args) {
    let result = 0;
    for(let a of args) {
        result += a;
    }
    return result;
}
console.log(add(1,2,3));

function person(name,...info) {
    console.log(name,info.join('-'));
}
person('xiaoming','boy',18);