/**
 * Created by fengjj on 2016/5/25.
 */
/*
    Symbol.for(str)  接受一个字符串参数，然后搜素有没有以该参数作为名称的Symbol值, 如果有返回这个Symbol值 ，否则新建一个Symbol值
    Symbol.for()有登记机制   全局环境（可以在不同iframe service worker中取到同一个值），  Symbol没有
* */
'use strict';
let s1 = Symbol.for('same');
let s2 = Symbol.for('same');
console.log(s1 === s2);
