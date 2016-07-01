/**
 * Created by fengjj on 2016/7/1.
 */
'use strict';
//数组解构 默认值   内部使用 严格相等（=== undefined）默认值是一个表达式时，采用惰性求值
let [a=0,b=1] = [];
console.log(a,b);  // 0 1
let [n=6,m=2] = [null]
console.log(n,m); //null 2

let f = (val) => val;
//let [x = f(a+6),y = f(b+'a')] = [];
//console.log(x,y); //6 '1a'
let [x = f(a+6),y = f(b+'a')] = [8];
console.log(x,y); //8 '1a'

