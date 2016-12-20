/**
 * Created by fengjj on 2016/6/28.
 */
'use strict';
//Object.keys(obj)
//Object.getOwnPropertyNames(obj)
//Object.getOwnPropertySymbols(obj)
//Object.getOwnPropertyDescriptor(obj, prop)
//for in

let skey = Symbol('first name');
let obj = {
    name:'xiaohua',
    getName() {
        return this.name;
    },
    [skey]() {
        console.log(Symbol.keyFor(skey));
    }
}
// Object.keys(obj) 返回对象本身的可枚举属性   不包括原型上的属性  不包括Symbel类型
//console.log(Object.keys(obj));

class Person {
    constructor(name){
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name,age) {
        super(name);
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
let s = new Student('xiaoming',18);
//console.log(Object.keys(s)); //[ 'name', 'age' ]

//Object.getOwnPropertyNames(obj)  返回对象本身属性（可枚举 或 不可以枚举）  不包括 原型上的属性  不包括Symbol类型的属性
console.log(Object.getOwnPropertyNames(s)); //[ 'name', 'age' ]
Object.defineProperty(s,'studentNumber',{
    value:'666',
    enumerable:false
});
console.log(Object.getOwnPropertyNames(s)); //[ 'name', 'age', 'studentNumber' ]


//Object.getOwnPropertySymbols(obj)  获取对象本身的所有Symbol类型的属性
console.log(Object.getOwnPropertySymbols(obj));   //[ Symbol(first name) ]

Student.prototype.setName = (name) => {
    this.name = name;
}
//for in 获取对象本身的可枚举属性 包括原型的可枚举属性及方法  不包括Symbol类型的属性
for(let property in s) {
    console.log(property);
}
