/**
 * Created by fengjj on 2016/5/25.
 */
/*
    Symbol属性名
* */
'use strict';
let symbol = Symbol();
let obj ={};
obj[symbol] = 'hello';

console.log('===== first way ====',obj,obj[symbol]);

let s1 = Symbol('word');
let obj1 = {
    [s1]:'word'
};
console.log('==== second way ====',obj1,obj1[s1]);


/*
    Symbol 在常量中的用处：保证常量的值是唯一的
* */
const COLOR_RED = Symbol('red');
const COLOR_GREEN = Symbol('green');

let s2 = Symbol('!');
let obj2 = {};
Object.defineProperty(obj2,s2,{value:'!'});
console.log('==== third way ===',obj2,obj2[s2]);
