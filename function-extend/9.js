/**
 * Created by fengjj on 2016/6/21.
 */
/*

    函数this绑定
    对象 :: 箭头函数
* */
'use strict';


class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log(this.name);
    }
    sayAge(){
        console.log(this.age);
    }
}
let p1 = new Person('xiaoming',18);
let p2 = new Person('xiaohua',16);
p2::p1.sayName();


