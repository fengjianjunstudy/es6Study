/**
 * Created by fengjj on 2016/6/28.
 */
'use strict';
//Object.create(proto[, propertiesObject])   创建一个新的对象（带有指定的原型对象和属性）可枚举的
function Shape(x,y) {
    this.x = x;
    this.y = y;
}
Shape.prototype = {
    constructor:'Shape',
    move(x,y) {
       this.x += x;
        this.y += y;
    }
}
function Rectangle() {
    Shape.call(this);
}
Rectangle.prototype = Object.create(Shape.prototype);
let r = new Rectangle();
console.log(r.move);

