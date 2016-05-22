/**
 * Created by feifei on 2016/5/22.
 */
    "use strict";
class  Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    change(x,y) {
        this.x = x;
        this.y = y;
    }
}
var p = new Point(1,2);
p.change(6,6);
console.log(p);
Object.assign(Point.prototype,{
    toString() {
        console.log("toString"+this.x+'$$'+this.y);
    },
    toValue() {
        console.log("toValue");
    }
})
p.toString();
p.toValue();
console.log(Object.keys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));
console.log(p.hasOwnProperty('x'));
console.log(p.hasOwnProperty('toString'));
let p1 = new Point(6,6);
let flag = p1.__proto__ === p.__proto__
console.log(flag);

console.log("name"+":"+Point.name)