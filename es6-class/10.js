/**
 * Created by fengjj on 2016/6/15.
 */
"use strict";

/*
    //构造函数
    function User(name,age) {
        this.name = name;
        this.age = age;
    }
    //静态方法
    User.getClassName = function() {
        return 'User';
    }

    //实例方法
    User.prototype = {
        constructor:'User',
        changeName:function(name) {
            this.name = name;
        },
        changeAge:function(age) {
            this.age = age;
        }
    }
    Object.defineProperty(User.prototype,'info',{
        get:function(){
            return 'name:'+this.name+';age='+this.age;
        }
    })
    let user = new User('xiaoming',18);
    console.log(user.info);

    //子类继承父类
    function Manager(name,age,password) {
        User.call(this,name,age);
        this.password = password;
    }
    Manager.__proto__ = User;
    Manager.prototype.__proto__ = User.prototype;


    //用法
    let m = new Manager('admin',88,123456);
    console.log(Manager.getClassName());
    console.log(m.info);
    Manager.prototype.getPassword = function() {
        return this.password;
    }
    console.log(m.getPassword());
*/

class User { //不会存在变量提升
    //构造函数
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //static level = 1;
    //静态方法
    static getClassName() {
        return 'User';
    }
    //实例方法
    changeName(name) {
        this.name = name;
    }
    changeAge(age) {
        this.age = age;
    }
    get info() {
        return 'name:'+this.name+';age='+this.age;
    }
}
class Manager extends User {
    constructor(name,age,password) {
        super(name,age); //必须先调用super方法，子类没有this对象，而是继承自父类的this对象，然后再对其加工
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
    changePassword(pwd) {
        this.password = pwd;
    }
}
let user = new User('xiaoming',18);
console.log(user.info,User.level);
let m = new Manager('admin',88,123456);
console.log(Manager.getClassName());
console.log(m.info);
m.changePassword('fjj');
console.log(m.getPassword());





