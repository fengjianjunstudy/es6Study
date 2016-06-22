/**
 * Created by fengjj on 2016/6/21.
 */
/*
函数参数默认值，默认值的参数的位置函数的尾参数
参数指定了默认值以后，函数的length属性将返回没有指定默认值的参数的个数，即：指定默认值之后，该参数的length失真
rest参数length也会失真
* */
'use strict';
function fetch(url,{ method = 'GET'} = {}){ //双重默认值
    console.log(url,method);
}
fetch('http:www.baidu.com',{method:'POST'});
fetch('https:google.com');
function foo(...args) {
    for(let v of args) {
        console.log(v);
    }
}

foo(1);
foo(6,8);
console.log(fetch.length);
console.log(foo.length);

