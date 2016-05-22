/**
 * Created by feifei on 2016/5/22.
 */
    "use strict";
class VersionedArray extends Array {
    constructor() {
        super();
        this.history = [[]];
    }
    commit() {
        this.history.push(this.slice());
    }
    revert() {
        this.splice(0,this.length,...this.history[this.history.length-1]);
    }
}
let x = new VersionedArray();
x.push(1);
x.push(2);
x.commit();
x.push(6);
console.log(x);
x.revert();
console.log(x);