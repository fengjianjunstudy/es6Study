/**
 * Created by fengjj on 2016/6/29.
 */
/*
    obj.__proto__
    Object.setPrototypeOf(obj, prototype);
    Object.getPrototypeOf(obj)
* */
'use strict';
let obj = {
    name:'xiaoming',
    getName() {
        return this.name;
    }
}
console.log(obj.__proto__ === Object.prototype);
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
let p = new Person('xiaohua',18);
console.log(p.age);
console.log(p.__proto__ === Person.prototype);
Object.setPrototypeOf(p,obj);
console.log(p.__proto__ === obj);
delete p.name;
console.log(p.getName());
console.log(p.getAge);
console.log(Object.getPrototypeOf(p));





