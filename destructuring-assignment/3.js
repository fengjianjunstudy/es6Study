/**
 * Created by fengjj on 2016/7/1.
 */
/*
    对象解构赋值  和数组解构的不同就是数组的元素是按顺序排列，而对象解构是没有顺序要求，只要变量和属性名相同就行
* */
'use strict';
let {foo,bar} = {foo:'aaa',bar:'bbb'};
console.log(foo,bar);
 //如果变量名和属性名不一致，必须写成如下写法
let {first:f,second:s} = {first:'li',second:'san'};
console.log(f,s);

let node = {loc:{start:{line:1,colum:6}}};
let {loc:{start:{line,colum}}} = node;
console.log(line,colum);
let {name='xiaoming',age=18} = {name:'xiaohua'};
console.log(name,age);