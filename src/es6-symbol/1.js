/**
 * Created by fengjj on 2016/5/25.
 */
/*
    Symbol 为了防止属性名冲突而引入   Smybol类型的属性都是独一无二的   它也是一种原始的数据类型
* */
 'use strict';
let s = Symbol('hello');
let m = Symbol('hello');
console.log(typeof s == typeof m);
console.log(s,typeof s);

/*
 Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的
* */
let s1 = Symbol('hello');
console.log('s === s1 &&&&&',s === s1);

/*
    Symbol 值不能和其他类型的值进行运算
* */
function checkFn() {
    let s1 = Symbol('hello');
    try {
        //console.log('symbol'+s1);
    }
    catch(e) {
        console.log('Symbol的值不能和其他类型的值进行运算',e);
    }
}
checkFn();

/*
    Symbol类型的值可以显式的转化为字符串 或者布尔值  但不能转为数值
* */

console.log('symbol to string',s1.toString());   //Symbol(hello)
console.log('symbol to boolean',Boolean(s1));  //true
export class Person {
    constructor(name,age){
        this.name = this.name;
        this.age = this.age;
    }
}