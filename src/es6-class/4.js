/**
 * Created by feifei on 2016/5/22.
 */
    "use strict";
class  Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    toString(x,y) {
        return this.x+""+this.y;
    }
    static sayName() {
        return Point.name;
    }
}
class ColorPoint extends Point {
    constructor(x,y,color) {
        super(x,y);
        this.color = color;
    }
    toString() {
        return super.toString()+this.color;
    }
}
let c = new ColorPoint(6,6,'red');
console.log(c.toString());
console.log(ColorPoint.__proto__ === Point);
console.log(ColorPoint.prototype.__proto__ === Point.prototype);
console.log(ColorPoint.sayName());
console.dir(Object.getPrototypeOf(ColorPoint));
console.dir(Object.getPrototypeOf(ColorPoint.prototype));