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
        console.log("toString");
    },
    toValue() {
        console.log("toValue");
    }
})
p.toString();
p.toValue();