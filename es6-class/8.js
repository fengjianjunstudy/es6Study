/**
 * Created by feifei on 2016/5/22.
 */
    "use strict";
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
        super(name);
    }
}
let rectanle = new Rectangle('rectanle');
console.log(rectanle.name);
let shape = new Shapes('shape');