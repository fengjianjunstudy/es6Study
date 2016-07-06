/**
 * Created by feifei on 2016/5/22.
 */
    "use strict";
class MyName {
    constructor(name) {
        this.name = name;
    }
    get myName() {
        return this.name;
    }
    set myName(name) {
        this.name = name;
    }
}
let n = new MyName('xx');
n.myName = "n";
console.log(n.myName);