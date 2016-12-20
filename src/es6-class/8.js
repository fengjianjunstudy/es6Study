/**
 * Created by feifei on 2016/5/22.
 */
    "use strict";
//new.target 返回实例所作用的构造函数
class Shapes {
    constructor(name) {
        if(new.target === Shapes) {
            throw  new Error('本类只能被继承');
        }else {
            this.name = name;
        }
    }
}
class Rectangle extends Shapes {
    constructor(name) {
        super(name);  //super必须调用，this继承自父级，只有调用super以后才有this
    }
}
let rectanle = new Rectangle('rectanle');
console.log(rectanle.name);
let shape = new Shapes('shape');